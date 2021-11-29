import React,{useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TextInput,
  TouchableOpacity

} from 'react-native';

import Icon1 from 'react-native-vector-icons/FontAwesome';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// import screen
import BackHeader from '../Components/BackHeader';
import Message from '../Components/Message';

const ChatScreen = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <BackHeader title="Abdul haseeb"/>
      <ScrollView>
        <Message
          _id={26516513513}
          name={"abdul haseeb"}
          message="Hey!!"
          url={require('../../assets/images/avatar.png')}
          hours={'25/11/2022'}
          Read={false}
          userView={false}
        />
        <Message
          _id={26516513513}
          name={"abdul haseeb"}
          message="Hi!!"
          url={require('../../assets/images/avatar.png')}
          hours={'25/11/2022'}
          Read={false}
          userView={true}
        />
        <Message
          _id={26516513513}
          name={"abdul haseeb"}
          message=" a segment with a sequence number that is larger than the next, expected, 
            in-order sequence number, it detects a gap in the data stream—that is, a missing segment. 
            This gap could be the result of lost or reordered segments within the network. 
            Since TCP does not use negative acknowledgments, the receiver cannot send an explicit 
            negative acknowledgment back to the sender. Instead, it simply reacknowledges 
            (that is, generates a duplicate ACK for) the last in-order byte of data it has received."
          url={require('../../assets/images/avatar.png')}
          hours={'25/11/2022'}
          Read={false}
          userView={false}
        />
        <Message
          _id={26516513513}
          name={"abdul haseeb"}
          message=" a segment with a sequence number that is larger than the next, expected, 
            in-order sequence number, it detects a gap in the data stream—that is. 
            Since TCP does not use negative acknowledgments, the receiver cannot send an explicit 
            negative acknowledgment back to the sender. Instead, it simply reacknowledges 
            (that is, generates a duplicate ACK for) the last in-order byte of data it has received."
          url={require('../../assets/images/avatar.png')}
          hours={'25/11/2022'}
          Read={false}
          userView={true}
        />
        <Message
          _id={26516513513}
          name={"abdul haseeb"}
          message=" a segment with a sequence number that is larger than the next, expected, 
            in-order sequence number, it detects a gap in the data stream—that is. 
            Since TCP does not use negative acknowledgments, th, it simply reacknowledges 
            (that is, generates a duplicate ACK for) the last in-order byte of data it has received."
          url={require('../../assets/images/avatar.png')}
          hours={'25/11/2022'}
          Read={false}
          userView={false}
        />
        <Message
          _id={26516513513}
          name={"abdul haseeb"}
          message=" a segment with a sequence number that is larger than the next, expected
            (that is, generates a duplicate ACK for) the last in-order byte of data it has received."
          url={require('../../assets/images/avatar.png')}
          hours={'25/11/2022'}
          Read={false}
          userView={true}
        />
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.createoffer}>
          <TextInput
            multiline
            numberOfLines={4}
            style={styles.inputmessage}
            defaultValue={text}
            placeholder="Type a message.."
            placeholderTextColor="rgba(104,111,140,1)"
            onChangeText={(e) => setText(e)}
          />
          <TouchableOpacity onPress={() => sendMessage()}>
            <View style={styles.icons}>
              <Icon1 name="send-o" size={hp('2%')} color="rgb(254,141,123)" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: hp('100%'),
  },


  icons: {
    display: 'flex',

    alignItems: 'center',

    justifyContent: 'center',
  },
  inputmessage: {
    marginLeft: '-2%',
    width: Dimensions.get('window').width / 1.5,
    fontSize:
      (Dimensions.get('window').height + Dimensions.get('window').width) / 84,
  },
  createoffer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: '2%',
    paddingTop: '2%',
  },
  footer: {
    minHeight: Dimensions.get('window').height / 12,
    maxHeight: Dimensions.get('window').height / 8,
    padding: '10%',
    paddingTop: '0%',
    paddingBottom: '0%',
    backgroundColor: '#fff',
    shadowColor: 'rgba(0,0,0,0.11)',
    shadowOffset: {
      width: 7,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 17,
  },

})


export default ChatScreen;
