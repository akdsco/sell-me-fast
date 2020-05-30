import { StyleSheet, View, ImageBackground } from 'react-native';
import React from "react";

export default function WelcomeScreen() {
  return(
    <View>
      <ImageBackground />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  }
});