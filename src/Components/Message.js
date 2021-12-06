import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {AuthContext} from '../AuthContext/Context';
import {
  scale,
  verticalScale,
  moderateScale,
  ScaledSheet,
} from 'react-native-size-matters';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

function StudentMessage(props) {
  const [read, setread] = useState(props.Read);
  return (
    <View
      style={
        props?.userView
          ? styles.message
          : [styles.message, {flexDirection: 'row-reverse'}]
      }>
      <Image style={styles.userimg} source={props.url} />
      <View
        style={
          props?.userView
            ? styles.message_content
            : [styles.message_content, {alignItems: 'flex-end'}]
        }>
        {/* <View style={styles.message_subcontent}>
          <Text style={styles.subcon_txt1}>{props.name}</Text>
        </View> */}
        <Text
          style={[
            styles.message_txt,
            props?.userView ? {textAlign: 'left'} : {textAlign: 'right'},
          ]}>
          {props.message}{' '}
        </Text>
        <Text style={styles.subcon_txt2}>{props.hours} </Text>
      </View>
    </View>
  );
}

const styles = ScaledSheet.create({
  message: {
    display: 'flex',
    flexDirection: 'row',
    padding: '3%',
    paddingTop: '2.5%',
    paddingBottom: '2.5%',
    // marginBottom: '4%',
    // paddingHorizontal: '3%',
    marginBottom: '1%',
    borderBottomColor: '#0003',
    borderBottomWidth: '1@ms',
  },

  userimg: {
    width: '35@ms',
    height: '35@ms',
    borderRadius: 10000,
    resizeMode: 'cover',
    width: '10%',
  },

  message_content: {
    width: '90%',
    marginHorizontal: '4%',
  },

  message_subcontent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  subcon_txt1: {
    fontFamily: 'Montserrat-Bold',
    fontSize: '12@ms',
    color: 'rgba(104,111,140,1)',
  },

  subcon_txt2: {
    marginTop: '0%',
    fontFamily: 'Montserrat-Regular',
    fontSize: '9@ms',
    fontSize: hp('1.2%'),
    color: 'rgba(104,111,140,1)',

    // fontWeight:'bold',
  },
  message_txt: {
    // paddingTop: '-3.5%',
    // paddingBottom: '0.75%',
    fontFamily: 'Montserrat-Medium',

    fontSize: '12@ms',
    width: '70%',
    color: 'rgba(104,111,140,1)',
  },
});

export default StudentMessage;
