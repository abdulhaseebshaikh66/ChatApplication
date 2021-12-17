import React from 'react';
import {StyleSheet, Text, View, StatusBar, ScrollView} from 'react-native';
import Icon1 from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import Secreens
import ChatComponent from '../Components/ChatSection';
import Header from '../Components/Header';
// export const Lastmsg = React.createContext('');
export default function HomeScreen({route, navigation}) {
  const {id, name} = route.params;
  const [conversations, setConversations] = React.useState([]);
  React.useEffect(() => {
    fetchConvos();
    return () => {};
  }, []);
  // React.useEffect(() => {
  //   navigation.addListener('focus', e => {
  //     // setConversations([]);
  //     // setMessage('');
  //     fetchConvos();
  //     console.log(e, 'is e');
  //   });
  //   return () => {};
  // }, []);

  const fetchConvos = () => {
    fetch('http://localhost:15000/' + id + '/conversations', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Authorization: "",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
    })
      .then(res => res.json())
      .then(received => {
        console.log('====================================');
        console.log('||||', received, '||||||');
        console.log('====================================');
        if (received?.response !== false) {
          console.log('Received');
          setConversations(received);
        }
      });
  };
  return (
    <View style={styles.container}>
      <Header name={name} />
      <ScrollView style={styles.messageView}>
        {conversations.map(val => {
          return (
            <View key={val.conversation_id}>
              {/* <Lastmsg.Provider value={val.last_message}> */}
              <ChatComponent
                conversation_name={val?.conversation_name}
                navigate={(uid, id, name, message_setter) => {
                  navigation.navigate('Chat', {
                    conversation_id: id,
                    conversation_name: name,
                    userid: uid,
                    message_setter: message_setter,
                  });
                }}
                conversation_id={val.conversation_id}
                last_message={val.last_message}
                message_type={val.message_type}
                userid={id}
              />
              {/* </Lastmsg.Provider> */}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  messageView: {
    marginTop: 5,
  },
});
