import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import colors from '../config/colors';

export default function ButtonWide({bgColor, text}) {
  return (
    <View style={styles.container} backgroundColor={bgColor}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 27,
    width: '80%',
    height: 54,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 20,
    textTransform: 'uppercase'
  }
});
