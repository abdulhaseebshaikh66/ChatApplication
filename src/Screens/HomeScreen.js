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

export default function HomeScreen({route, navigation}) {
  const {id} = route.params;
  const [conversations, setConversations] = React.useState([]);
  // alert(JSON.stringify(route));
  React.useEffect(() => {
    console.log(
      'Hello World from Home ' + JSON.stringify(navigation),
      'is user',
    );
    // let Tosend = 'http://localhost:15000/' + id + '/conversations';
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
          setConversations(received);
        }
      });
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <StatusBar style="auto" />
      <ScrollView style={styles.messageView}>
        {conversations.map(val => {
          return (
            <View key={val.conversation_id}>
              <ChatComponent
                conversation_name={val?.conversation_name}
                navigate={(uid, id, name) => {
                  navigation.navigate('Chat', {
                    conversation_id: id,
                    conversation_name: name,
                    userid: uid,
                  });
                }}
                conversation_id={val.conversation_id}
                last_message={val.last_message}
                userid={id}
              />
            </View>
          );
        })}
        {/* <ChatComponent
          navigate={() => {
            navigation.navigate('Chat');
          }}
        />
        <ChatComponent />
        <ChatComponent /> */}
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
