import React from 'react';
import { StyleSheet } from 'react-native';
import { useDeviceOrientation } from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  const { landscape } = useDeviceOrientation();

  return (
      <WelcomeScreen />
  )
}

const styles = StyleSheet.create({
  container: {
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
    flexDirection: 'column'
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  counter: {
    paddingTop: 20,
    color: 'white',
    fontSize: 50
  },
  reset: {
    color: 'red',
    marginTop: 50,
    borderWidth: 2,
    borderColor: 'red',
    padding: 10,
    fontSize: 26
  }
});
