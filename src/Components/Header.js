import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Header = ({name}) => {
  return (
    <View style={styles.header}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{width: wp('20%')}}
          onPress={() => console.log('hello')}>
          <Image
            onPress={() => console.log('Press')}
            source={require('../../assets/images/avatar.png')}
            style={styles.image}
          />
        </TouchableOpacity>
        <Text style={styles.txt}>{name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    padding: 15,
    paddingLeft: 0,
    // paddingLeft:30,
  },
  txt: {
    fontSize:
      (Dimensions.get('window').height + Dimensions.get('window').width) / 60,
    fontSize: hp('2.8%'),
    // color: 'rgba(104, 111, 140, 1)',
    color: '#391c4d',
    fontFamily: 'Montserrat-Bold',
    alignSelf: 'center',
  },
  // image section on headertxt
  image: {
    width: '100%',
    height: hp('5%'),
    resizeMode: 'contain',
    borderRadius: 10000,
  },
});

export default Header;
