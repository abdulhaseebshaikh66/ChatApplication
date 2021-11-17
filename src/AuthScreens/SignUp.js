import React from 'react';
import { 
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const SignUpScreen = ({navigation}) => {
  const [ data, setData ] = React.useState({
    FullName:'',
    Mail:"",
    Phone:"",
    Password:"",
  })
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image style={styles.logo} source={require('../../assets/images/logo2.png')}/>
      </View>
      <View style={styles.body}>
        <TextInput 
          placeholder='Full Name'
          style={styles.textField}
          onChangeText={(txt)=>{setData({...data, FullName:txt})}}
        />
        <TextInput 
          placeholder='Email/Username'
          style={styles.textField}
          onChangeText={(txt)=>{setData({...data, Email:txt})}}
        />
        <TextInput 
          placeholder='Phone Number'
          style={styles.textField}
          onChangeText={(txt)=>{setData({...data, Phone:txt})}}
        />
        <TextInput 
          placeholder='Password'
          style={styles.textField}
          secureTextEntry
          onChangeText={(txt)=>{setData({...data, Password:txt})}}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={[styles.txtbtn]}>Register</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <View style={[ styles.row]}>
          <Text style={[styles.footertext]}>
            If you have already an account, click here to{' '}
          </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={[styles.footertext, {color: "#391c4d"}]}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex:1,
    height:hp('100%'),
    backgroundColor:'#fff',
    // justifyContent: 'center',\
  },
  imageView:{
    flex:.3,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  bottomHeader:{

  },
  logo:{
    resizeMode:'contain',
    height: 150,
    width: 150
  },
  body:{
    flex:.7,
    padding:10,
    paddingLeft:20,
    paddingRight:20,
    justifyContent: 'center',
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
    backgroundColor:"#391c4d",
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
    color:'blue',
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

export default SignUpScreen;