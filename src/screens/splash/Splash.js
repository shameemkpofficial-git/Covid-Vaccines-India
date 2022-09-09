import React, {useEffect, useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useTheme} from '@theme/ThemeContext';
import Lotties from 'lottie-react-native';
import Fonts from '../../theme/Fonts';
import {AppContext} from '../../common/Constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';

export default function Splash({navigation}) {
  const {colors, isDark} = useTheme();
  // const {user, setUser, baseurl} = useContext(AppContext);

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
  }, []);

  return (
    <View style={[styles.mainContainer]}>
      <Lotties
        source={require('../../assets/animation/Healthy.json')}
        autoPlay
        loop={false}
        style={{height: 200}}></Lotties>
      <Text style={styles.textStyle}>Covid-19 India</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  textStyle: {
    fontSize: 20,
    fontWeight: '800',
    color: 'black',
  },
});
