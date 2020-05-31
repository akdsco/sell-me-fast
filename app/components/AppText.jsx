import React from 'react';
import { Text, StyleSheet } from 'react-native';
import {Platform} from "react-native-web";

export default function AppText({children}) {
  return (
    <Text style={styles.text}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: 'Avenir',
      },
      android: {
        fontSize: 18,
        fontFamily: 'Roboto'
      }
    }),
  }
});