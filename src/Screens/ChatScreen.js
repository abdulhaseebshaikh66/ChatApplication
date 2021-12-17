import React, {useState, useRef, useEffect} from 'react';
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
// import {Lastmsg} from './HomeScreen';
import BackHeader from '../Components/BackHeader';
import Message from '../Components/Message';
import {ms} from 'react-native-size-matters';
import * as Algorithm from '../Algorithm_Encyption_Decryption';

const ChatScreen = ({route, navigation}) => {
  // console.log(Lastmsg);
  const {userid, conversation_id, conversation_name, message_setter} =
    route.params;
  const [text, setText] = useState('');
  const [data, setData] = useState([]);
  const [id, setId] = useState(1);
  //const message_setter = React.useContext(Lastmsg);
  const url = '../../assets/images/avatar.png';
  function saveChat(newMessage) {
    // console.log('Saved : ', newMessage);
    //Encryption will happen here
    fetch('http://localhost:15000/' + conversation_id + '/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Authorization: "",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(newMessage),
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
    })
      .then(res => res.json())
      .then(received => {
        console.log('====================================');
        // console.log('||||', received, '||||||');
        console.log('====================================');
      });
  }
  function extractChat() {
    // fetch()
    console.log('Hello world from ChatScreen with conv id : ', conversation_id);
    fetch(
      'http://localhost:15000/' + userid + '/' + conversation_id + '/messages',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Authorization: "",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
      },
    )
      .then(res => res.json())
      .then(received => {
        console.log('====================================');
        // console.log('||||', received, '||||||');
        console.log('====================================');
        let tempArray = [];
        for (let index = 0; index < received.length; index++) {
          setId(id + 1);
          const decrypted = Algorithm.decrypt(
            received[index].message_text,
            received[index].message_type,
          );
          let obj = {
            _id: id,
            message: decrypted, //AFTER DECRYPTING WILL LOOK CHANGE
            hours: new Date(received[index].message_date).toLocaleDateString(),
            read: 0,
            userView: received[index].userView,
            name: received[index].fullname,
          };
          tempArray.push(obj);
        }
        setData([...data, ...tempArray]);
        // setConversations(received);
      });
    // return () => {};
  }
  useEffect(() => {
    extractChat();
    return () => {};
  }, []);

  const scrollView = useRef();

  const handleData = () => {
    let _id = id;
    console.log('heel' + id);
    setId(id + 1);
    let date = new Date();
    let read = 0;
    let userView = 0;
    let message = text.trim();
    if (message.length > 0) {
      let obj = {
        _id: id,
        message: message,
        hours: date.toLocaleDateString(),
        read: read,
        userView: userView,
        name: conversation_name,
      };
      setData([...data, obj]);
      setText('');
      const message_type = Algorithm.generate_type();
      const enc_message = Algorithm.encrypt(message, message_type);
      saveChat({
        senderid: userid,
        message_text: enc_message,
        message_type: message_type,
      });
      message_setter(message);
    }
    return;
  };
  return (
    <View style={styles.container}>
      <BackHeader title={conversation_name} />
      <ScrollView
        ref={scrollView}
        onContentSizeChange={() =>
          scrollView.current.scrollToEnd({animated: true})
        }>
        {data.map((msg, ind) => (
          <View key={ind} style={{flex: 1}}>
            <Message
              id={ind}
              _id={msg._id}
              // name={'abdul haseeb'}
              message={msg.message}
              url={require(url)}
              hours={msg.hours}
              Read={msg.read}
              userView={msg.userView}
              name={msg.name}
            />
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.createoffer}>
          <TextInput
            multiline
            // numberOfLines={2

            style={styles.inputmessage}
            defaultValue={text}
            placeholder="Type a message.."
            placeholderTextColor="rgba(104,111,140,1)"
            onChangeText={val => {
              setText(val);
            }}
          />
          <TouchableOpacity style={styles.icons} onPress={() => handleData()}>
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
    // dheight: 120,
    maxHeight: 340,
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
