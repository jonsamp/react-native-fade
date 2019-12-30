import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Fade from "react-native-fade";

export default function App() {
  const [visible, setVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Button
        onPress={() => setVisible(!visible)}
        title={visible ? "Hide text" : "Show text"}
      />
      <Fade visible={visible} direction="up">
        <Text>I fade in</Text>
      </Fade>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
