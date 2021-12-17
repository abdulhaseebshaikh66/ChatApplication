import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Switch,
  Alert,
} from 'react-native';
import emailChecker from './emailChecker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ip from '../data/ip_address';
import * as Algorithm from '../Algorithm_Encyption_Decryption';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SignUpScreen = ({navigation}) => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const [data, setData] = React.useState({
    FullName: '',
    Mail: '',
    Phone: '',
    Password: '',
    Gender: 'M',
  });
  const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.log('==34================');
      console.log(e);
      console.log('====34=======================');
    }
  };
  const handleRegister = () => {
    // console.log('Registered : mail ', emailChecker(data.Mail));
    if (
      data.FullName.split(' ').length < 2 ||
      !emailChecker(data.Mail) ||
      data.Phone.length != 11 ||
      data.Password.length < 8 ||
      data.FullName.length < 7
    ) {
      console.log('Not registered!');
      Alert.alert(
        'Error',
        'Incorrect Infomation entered',
        [
          {
            text: 'Re Enter',
            onPress: () => {},
          },
        ],
        {
          cancelable: false,
        },
      );
    } else {
      const user_type = Algorithm.generate_type();
      const enc_email = Algorithm.generate_key(data.Mail);
      const enc_password = Algorithm.generate_key(data.Password);
      const enc_phone = Algorithm.generate_key(data.Phone);
      fetch('http://localhost:15000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Authorization: "",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({
          name: data.FullName,
          email: enc_email,
          password: enc_password,
          phone: enc_phone,
          gender: data.Gender,
          user_type: user_type,
        }),
      })
        .then(res => res.json())
        .then(respond => console.log(respond, 'is respond\n'))
        .catch(e => {
          console.log(e, 'IS the error');
        });
      Alert.alert(
        'Register Successful',
        'Welcome ' + data.FullName + '\nClick OK to continue',
        [
          {
            text: 'OK',
            onPress: () => navigation.goBack(),
          },
        ],
        {
          cancelable: false,
        },
      );

      storeData('usertype', user_type);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/logo2.png')}
        />
      </View>
      <View style={styles.body}>
        <TextInput
          placeholder="Full Name"
          style={styles.textField}
          onChangeText={txt => {
            setData({...data, FullName: txt});
          }}
        />
        <TextInput
          placeholder="Email"
          style={styles.textField}
          onChangeText={txt => {
            setData({...data, Mail: txt});
          }}
        />
        <TextInput
          placeholder="Phone Number"
          style={styles.textField}
          onChangeText={txt => {
            setData({...data, Phone: txt});
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
        <View style={{paddingTop: 15, flex: 0.6, alignSelf: 'center'}}>
          <Text style={styles.genderTitle}> Select your gender </Text>
          <View style={styles.genderSwitch}>
            <Text style={styles.genderOptions}>Female</Text>
            <Switch
              trackColor={{false: '#ff8888', true: '#81b0ff'}}
              thumbColor={'#ddd'}
              onValueChange={val => {
                setData({...data, Gender: val ? 'M' : 'F'});
              }}
              value={data.Gender === 'F' ? false : true}
            />
            <Text style={styles.genderOptions}>Male</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={[styles.txtbtn]}>Register</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <View style={[styles.row]}>
          <Text style={[styles.footertext]}>
            If you have already an account, click here to{' '}
          </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={[styles.footertext, {color: '#391c4d'}]}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex:1,
    height: hp('100%'),
    backgroundColor: '#fff',
    // justifyContent: 'center',\
  },
  imageView: {
    flex: 0.3,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  bottomHeader: {},
  logo: {
    resizeMode: 'contain',
    height: 150,
    width: 150,
  },
  body: {
    flex: 0.7,
    padding: 10,
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
    // backgroundColor: '#391c4d',
    borderColor: '#391c4d',
    borderWidth: 3,
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
      (Dimensions.get('window').height + Dimensions.get('window').width) / 80,
    color: '#391c4d',
  },
  genderSwitch: {
    paddingTop: 10,
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  genderTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'serif',
  },
  genderOptions: {
    fontSize: 12,
    fontFamily: 'serif',
  },
  /// text styles
  forgetPass: {
    marginTop: '5%',
    fontFamily: 'Montserrat-SemiBold',
    fontSize:
      (Dimensions.get('window').height + Dimensions.get('window').width) / 88,
    color: 'blue',
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

export default SignUpScreen;
