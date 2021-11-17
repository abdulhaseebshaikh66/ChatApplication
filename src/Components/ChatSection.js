import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  Dimensions,
  Image,  
} from 'react-native';

import {
  widthPercentageToDP as wp, 
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';


const ChatSection = () =>{
  return (
    <View style={[styles.container, styles.row]}>
      <View style={styles.imageView}>
        <Image
          style={styles.image}
          source={require('../../assets/images/avatar.png')}
        />
      </View>
      <View style={styles.textView}>
        <View style={styles.row}>
          <Text style={[styles.headertxt,{width:"70%"}]}>Abdul haseeb</Text>
          <Text style={[styles.txt,{ alignSelf: 'center', alignText:'center'}]}>
            10/10/21
          </Text>
        </View>
        <View style={{}}>
          <Text numberOfLines={3} style={[styles.txt,{marginTop:'2%'}]}>
          a segment with a sequence number that is larger than the next, expected, in-order 
sequence number, it detects a gap in the data stream—that is, a missing segment. 
This gap could be the result of lost or reordered segments within the network. Since 
TCP does not use negative acknowledgments, the receiver cannot send an explicit 
negative acknowledgment back to the sender. Instead, it simply reacknowledges 
(that is, generates a duplicate ACK for) the last in-order byte of data it has received. 
(Note that Table 3.2 allo
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#fff',
    borderRadius:10,
    fontFamily: 'Montserrat-SemiBold',
    fontSize:(Dimensions.get('window').height+Dimensions.get('window').width)/88,
    margin:'3%',
    marginTop:"1%",
    elevation:10,
    padding:15,
  },
  row:{
    flexDirection: 'row',
  },
  imageView:{
    width:'25%',
    justifyContent: 'center',
    // backgroundColor: 'red'
  },
  headertxt:{
    fontFamily: 'Montserrat-Bold',
    fontSize:hp('2.1%'),
  },
  textView:{
    width:'70%'
  },
  txt:{
    fontFamily: 'Montserrat-SemiBold',
    fontSize:hp('1.8%'),
  },
  image:{
    resizeMode:'contain',
    width:wp('20%'),
    height:hp('8%'),
    borderRadius:10000,
  }
})


export default ChatSection;
