import { StyleSheet, View, ImageBackground, Image, Text } from 'react-native';
import backgroundImg from '../assets/background.jpg';
import logo from '../assets/logo-red.png';
import React from "react";

export default function WelcomeScreen() {
  return(
      <ImageBackground style={styles.background} source={backgroundImg}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logoImg}/>
          <Text style={styles.logoText}>Sell What You Don't Need</Text>
        </View>
        <View style={styles.loginBtn} />
        <View style={styles.registerBtn} />
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
    top: 4
  },
  loginBtn: {
    height: 70,
    width: '100%',
    backgroundColor: '#fc5c65',
  },
  registerBtn: {
    height: 70,
    width: '100%',
    backgroundColor: '#4ecdc4',
  }
});