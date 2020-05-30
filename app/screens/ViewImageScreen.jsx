import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import chair from '../assets/chair.jpg';

export default function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.closeIcon}/>
        <View style={styles.deleteIcon}/>
      </View>
      <Image resizeMode='contain' source={chair} style={styles.image}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1
  },
  image: {
    width: '100%',
    height: '105%',
    resizeMode: 'contain',
  },
  iconContainer: {
    width: '90%',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    left: 20,
    top: 35,
  },
  closeIcon: {
    backgroundColor: '#fc5c65',
    width: 50,
    height: 50
  },
  deleteIcon: {
    backgroundColor: '#4ecdc4',
    width: 50,
    height: 50
  }
});