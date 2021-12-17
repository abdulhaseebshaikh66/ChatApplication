import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import {Lastmsg} from '../Screens/HomeScreen';
import * as Algorithm from '../Algorithm_Encyption_Decryption';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ChatSection = props => {
  const {
    conversation_name,
    conversation_id,
    userid,
    last_message,
    message_type,
  } = props;
  const decrypted = Algorithm.decrypt(last_message, message_type);
  const [message, setLastMessage] = React.useState(decrypted);
  // console.log(Lastmsg);
  // const last_message = React.useContext(Lastmsg);
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigate(
          userid,
          conversation_id,
          conversation_name,
          setLastMessage,
        );
      }}>
      <View style={[styles.container, styles.row]}>
        <View style={styles.imageView}>
          <Image
            style={styles.image}
            source={require('../../assets/images/avatar.png')}
          />
        </View>
        <View style={styles.textView}>
          <View style={styles.row}>
            <Text style={[styles.headertxt, {width: '75%'}]}>
              {conversation_name}
            </Text>
            <Text
              style={[styles.txt, {alignSelf: 'center', textAlign: 'center'}]}>
              10/10/21
            </Text>
          </View>
          <View style={{}}>
            <Text numberOfLines={3} style={[styles.txt, {marginTop: '2%'}]}>
              {message}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    fontFamily: 'Montserrat-SemiBold',
    fontSize:
      (Dimensions.get('window').height + Dimensions.get('window').width) / 88,
    margin: '3%',
    marginTop: '1%',
    elevation: 10,
    padding: 15,
  },
  row: {
    flexDirection: 'row',
  },
  imageView: {
    width: '25%',
    justifyContent: 'center',
    // backgroundColor: 'red'
  },
  headertxt: {
    fontFamily: 'Montserrat-Bold',
    fontSize: hp('2.1%'),
  },
  textView: {
    width: '70%',
  },
  txt: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: hp('2%'),
  },
  image: {
    resizeMode: 'contain',
    width: wp('20%'),
    height: hp('8%'),
    borderRadius: 10000,
  },
});

export default ChatSection;
