import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Fade from 'react-native-fade';
// import Fade from './Fade';

export default function App() {
  const [on, setOn] = useState(false);
  const [on2, setOn2] = useState(false);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="toggle" onPress={() => setOn(!on)} />
      <Button title="toggle2" onPress={() => setOn2(!on2)} />
      <Fade visible={on} direction="up">
        <Text>Hello</Text>
      </Fade>
      <Fade visible={on2}>
        <Text>Hello2</Text>
      </Fade>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
