import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Icon1 from 'react-native-vector-icons/FontAwesome';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// import screen
import BackHeader from '../Components/BackHeader';
import Message from '../Components/Message';
import {ms} from 'react-native-size-matters';

const ChatScreen = () => {
  const [text, setText] = useState('');
  const [data, setData] = useState([]);
  const [id, setId] = useState(1);
  const url = '../../assets/images/avatar.png';
  const scrollView = useRef();
  const handleData = () => {
    let _id = id;
    console.log('heel' + id);
    setId(id + 1);
    let date = new Date();
    // date.toLocaleDateString()
    let read = Math.round(Math.random());
    let userView = Math.round(Math.random());
    let message = text;
    // setData([
    //   ...data,
    // {
    //   _id: _id,
    //   message: message,
    //   hours: date,
    //   read: read,
    //   userView: userView,
    // },
    // ]);
    let obj = {
      _id: id,
      message: message,
      hours: date.toLocaleDateString(),
      read: read,
      userView: userView,
    };
    setData([...data, obj]);
    console.log(obj, ' isdata');
    setText('');
    return;
  };
  return (
    <View style={styles.container}>
      <BackHeader title="Abdul haseeb" />
      <ScrollView
        ref={ref => (scrollView = ref)}
        onContentSizeChange={() =>
          scrollView.current.scrollToEnd({animated: true})
        }>
        {data.map((msg, ind) => (
          <Message
            id={ind}
            _id={msg._id}
            // name={'abdul haseeb'}
            message={msg.message}
            url={require(url)}
            hours={msg.hours}
            Read={msg.read}
            userView={msg.userView}
          />
        ))}
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
            onChangeText={e => setText(e)}
          />
          <TouchableOpacity style={styles.icons} onPress={handleData}>
            <Icon1 name="send-o" size={hp('2%')} color="rgb(254,141,123)" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // height: hp('100%'),
    flex: 1,
  },

  icons: {
    display: 'flex',
    borderRadius: 50,
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    // justifyContent: 'center',
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
    // borderRadius: 20,
    borderColor: 'black',
    borderWidth: 1,
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 17,
  },
});

export default ChatScreen;
