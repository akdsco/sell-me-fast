import { StyleSheet, View, ImageBackground, Image, Text } from 'react-native';
import backgroundImg from '../assets/background.jpg';
import logo from '../assets/logo-red.png';
import React from "react";
import ButtonWide from "../components/ButtonWide";

import colors from '../config/colors';

export default function WelcomeScreen() {
  return(
      <ImageBackground style={styles.background} blurRadius={1} source={backgroundImg}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logoImg}/>
          <Text style={styles.logoText}>Sell What You Don't Need</Text>
        </View>
        <ButtonWide style={styles.loginBtn} text='Login' bgColor={colors.primary}/>
        <ButtonWide style={styles.registerBtn} text='Register' bgColor={colors.secondary}/>
      </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logoContainer: {
    position: 'absolute',
    top: 65,
  },
  logoImg: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  logoText: {
    top: 15,
    fontSize: 28,
    fontWeight: '700',
  },
  loginBtn: {
  },
  registerBtn: {
  }
});