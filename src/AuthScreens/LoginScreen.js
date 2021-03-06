import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import emailChecker from './emailChecker';
import * as Algorithm from '../Algorithm_Encyption_Decryption/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
const LoginScreen = ({navigation}) => {
  const [data, setData] = React.useState({
    Email: '',
    Password: '',
  });

  const getData = async key => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        console.log('VAL is : ', value, '   iS val|\n');
        return value;
      } else {
        return '';
      }
    } catch (e) {
      console.log('rror reading value');
    }
  };

  // http://localhost:15000/signup
  const checkCredentials = async () => {
    if (!emailChecker(data.Email)) {
      Alert.alert('Error', 'Please enter correct email address');
    } else if (data.Password.length < 8) {
      Alert.alert('Error', 'Password is atleast 8 characters');
    } else {
      const headers = new Headers();
      const user_type = await getData('usertype');
      if (user_type.length === 0) {
        Alert.alert('No User like this exists', 'no user exists');
        return;
      }
      const enc_email = Algorithm.generate_key(data.Email);
      const enc_password = Algorithm.generate_key(data.Password);

      console.log(user_type, '  is u type\n\n');

      console.log('====================================');
      console.log('IS EMAIL : ? ', enc_email);
      console.log('IS pasword ? ', enc_password);
      console.log('====================================');

      headers.append('Content-Type', 'application/json');
      headers.append('email', enc_email);
      headers.append('password', enc_password);

      fetch('http://localhost:15000/login', {
        method: 'GET',
        headers: headers,
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
      })
        .then(res => {
          console.log('here1');
          return res.json();
        })
        .then(received => {
          console.log('here2');
          console.log('Received ', received, '\n\nEND\n');
          if (received.response) {
            // USER IS LOGGED IN NOW
            //USER IS FOUND IN DATABASE
            AsyncStorage.setItem(
              'usertype',
              received.data[0]._user_type,
              err => {
                console.log('====================================');
                console.log('EE');
                console.log('====================================');
              },
            );
            navigation.navigate('Home', {
              id: received.data[0].userid,
              name:
                received.data[0].gender === 'M'
                  ? 'Mr. ' +
                    received.data[0].firstname +
                    ' ' +
                    received.data[0].lastname
                  : 'Mrs. ' +
                    received.data[0].firstname +
                    ' ' +
                    received.data[0].lastname,
            });
          } else {
            Alert.alert('Invalid Credentials', 'Wrong email or password');
          }
        })
        .catch(err => {
          console.log('====================================');
          console.log(err);
          console.log('====================================');
          Alert.alert('No Connection', 'Not connected to internet');
        });

      return;
    }
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageView}>
          <Image
            style={styles.logo}
            source={require('../../assets/images/logo2.png')}
          />
        </View>
        <View style={styles.body}>
          <TextInput
            placeholder="Email"
            style={styles.textField}
            onChangeText={txt => {
              setData({...data, Email: txt});
            }}
          />
          <TextInput
            placeholder="Password"
            style={styles.textField}
            secureTextEntry
            onChangeText={txt => {
              setData({...data, Password: txt});
            }}
          />
          <Text style={styles.forgetPass}>Forgot password</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={
              checkCredentials
              // navigation.navigate('HomeTab');
            }>
            <Text style={[styles.txtbtn]}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <View style={[styles.row]}>
            <Text style={[styles.footertext]}>
              Dont have an account? Click here to{' '}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={[styles.footertext, {color: '#391c4d'}]}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex:1,
    height: hp('100%'),
    backgroundColor: '#fff',
    // justifyContent: 'center',
  },
  imageView: {
    flex: 0.4,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  logo: {
    resizeMode: 'contain',
    height: 200,
    width: 200,
  },
  body: {
    flex: 0.6,
    // padding:10,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
  },

  // input text and button
  textField: {
    backgroundColor: '#fff',
    height:
      (Dimensions.get('window').height + Dimensions.get('window').width) / 22,
    borderRadius: 10000,
    fontFamily: 'Montserrat-SemiBold',
    fontSize:
      (Dimensions.get('window').height + Dimensions.get('window').width) / 88,
    paddingLeft: 30,
    marginTop: '5%',
    elevation: 10,
  },

  button: {
    marginTop: '10%',
    alignSelf: 'center',
    backgroundColor: '#391c4d',
    alignItems: 'center',
    borderRadius: 1000,
    justifyContent: 'center',
    height:
      (Dimensions.get('window').height + Dimensions.get('window').width) / 20,
    width:
      (Dimensions.get('window').height + Dimensions.get('window').width) / 7,
  },
  txtbtn: {
    fontFamily: 'Montserrat-Bold',
    fontSize:
      (Dimensions.get('window').height + Dimensions.get('window').width) / 88,
    color: 'white',
  },

  /// text styles
  forgetPass: {
    marginTop: '5%',
    fontFamily: 'Montserrat-SemiBold',
    fontSize:
      (Dimensions.get('window').height + Dimensions.get('window').width) / 88,
    color: '#391c4d',
    alignSelf: 'flex-end',
  },

  // header
  footer: {
    flex: 0.075,
    backgroundColor: 'rgb(245,245,245)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  footertext: {
    color: 'rgb(104,111,140)',
    // fontSize:'12@s',
    fontFamily: 'Montserrat-Regular',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;
