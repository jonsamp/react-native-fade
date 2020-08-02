import * as React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Fade from 'react-native-fade';

export default function App() {
  const [visible, setVisible] = React.useState(false);

  return (
    <View style={styles.container}>
      <Fade visible={visible}>
        <Text>Hello!</Text>
      </Fade>
      <Button
        onPress={() => setVisible(!visible)}
        title={`Fade ${visible ? 'out' : 'in'}`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
