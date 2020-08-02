# react-native-fade

[![runs with expo](https://img.shields.io/badge/Runs%20with%20Expo-000.svg?style=flat&logo=EXPO&labelColor=ffffff&logoColor=000)](https://github.com/expo/expo)

A wrapper component to fade its children in and out based on a boolean.

![Fade example gif](https://user-images.githubusercontent.com/6455018/71566445-b0982780-2a85-11ea-96f9-2519dc33930d.gif)

## Installation

```bash
# yarn
yarn add react-native-fade

# npm
npm install react-native-fade --save
```

Then, import with:

```js
import Fade from 'react-native-fade';
```

Note:
You may also need to install `react-native-reanimated`.

## Usage

Example:

```js
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Fade from 'react-native-fade';

export default function App() {
  const [visible, setVisible] = useState(false);
  return (
    <View>
      <Button
        onPress={() => setVisible(!visible)}
        title={visible ? 'Hide text' : 'Show text'}
      />
      <Fade visible={visible} direction="up">
        <Text>I fade in</Text>
      </Fade>
    </View>
  );
}
```

You can see a full example app inside the /example folder!

## Props

| Prop        | Required? | Type                         | Description                                                                                                                                     |
| ----------- | --------- | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `visible`   | false     | boolean                      | Show the children of `<Fade>`.                                                                                                                  |
| `direction` | false     | string                       | Can be `"up"` or `"down"`. When the child component fades in there's an optional subtle translation that you can apply with `"up"` or `"down"`. |
| `duration`  | false     | number                       | The amount of time in milliseconds the fade transition should take.                                                                             |
| `style`     | false     | React Native Style or Object | Applies style a view around the faded child components                                                                                          |
