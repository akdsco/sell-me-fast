import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, Platform, StatusBar, SafeAreaView } from 'react-native';
import { useDeviceOrientation } from "@react-native-community/hooks";

export default function App() {
  const { landscape } = useDeviceOrientation();

  const [number, setNumber] = useState(0);

  const handlePress = () => {
    setNumber(number + 1);
    alert('Added 1 to the counter.')
  };

  const handleReset = () => {
    setNumber(0);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          height: landscape ? '100%' : '30%',
          width: '100%',
          backgroundColor: 'dodgerblue'
        }}
      >

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  image: {
    height: 200,
    width: 200
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
