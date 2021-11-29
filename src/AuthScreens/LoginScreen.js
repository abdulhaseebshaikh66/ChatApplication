import React from 'react';
import { 
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const LoginScreen = ({navigation}) => {
  const [ data, setData ] = React.useState({
    FullName:'',
    Password:"",
  })
  return (
      <ScrollView>
    <View style={styles.container}>

        <View style={styles.imageView}>
          <Image style={styles.logo} source={require('../../assets/images/logo2.png')}/>
        </View>
        <View style={styles.body}>
          <TextInput 
            placeholder='UserName'
            style={styles.textField}
            onChangeText={(txt)=>{setData({...data, FullName:txt})}}
          />
          <TextInput 
            placeholder='Password'
            style={styles.textField}
            secureTextEntry
            onChangeText={(txt)=>{setData({...data, Password:txt})}}
          />
          <Text style={styles.forgetPass}>Forget password</Text>
          <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate("Home")}}>
            <Text style={[styles.txtbtn]}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <View style={[ styles.row]}>
            <Text style={[styles.footertext]}>
              Dont have an account? Click here to{' '}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={[styles.footertext, {color: "#391c4d"}]}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex:1,
    height:hp('100%'),
    backgroundColor:'#fff',
    // justifyContent: 'center',
  },
  imageView:{
    flex:.4,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  logo:{
    resizeMode:'contain',
    height: 200,
    width: 200,
  },
  body:{
    flex:.6,
    // padding:10,
    paddingLeft:20,
    paddingRight:20,
    justifyContent: 'center'
  },
  
  // input text and button
  textField:{
    backgroundColor:'#fff',
    height:(Dimensions.get('window').height+Dimensions.get('window').width)/22,
    borderRadius:10000,
    fontFamily: 'Montserrat-SemiBold',
    fontSize:(Dimensions.get('window').height+Dimensions.get('window').width)/88,
    paddingLeft:30,
    marginTop:"5%",
    elevation:10,
  },

  button:{
    marginTop:'10%',
    alignSelf:'center',
    backgroundColor:'#391c4d',
    alignItems: 'center',
    borderRadius:1000,
    justifyContent: 'center',
    height:(Dimensions.get('window').height+Dimensions.get('window').width)/20,
    width:(Dimensions.get('window').height+Dimensions.get('window').width)/7,
  },
  txtbtn:{
    fontFamily: 'Montserrat-Bold',
    fontSize:(Dimensions.get('window').height+Dimensions.get('window').width)/88,
    color:'white',
  },

  /// text styles
  forgetPass:{
    marginTop:'5%',
    fontFamily: 'Montserrat-SemiBold',
    fontSize:(Dimensions.get('window').height+Dimensions.get('window').width)/88,
    color:'#391c4d',
    alignSelf: 'flex-end',
  },


  // header
  footer: {
    flex:.075,
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

})

export default LoginScreen;