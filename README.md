# react-native-fade

A wrapper component to fade its children in and out based on a boolean.

![fade](https://user-images.githubusercontent.com/6455018/46253439-f7920a00-c449-11e8-8637-17a17b764449.gif)

## Installation

```bash
# yarn
yarn add react-native-fade

# npm
npm install react-native-fade --save
```

Then, import with:

```js
import Fade from "react-native-fade";
```

## Usage

Example:

```js
import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import Fade from "react-native-fade";

class Notification extends Component {
  state = {
    isGeeseSeason: false
  };

  toggleGeeseSeason = () =>
    this.setState(prevState => ({ isGeeseSeason: !prevState.isGeeseSeason }));

  render() {
    return (
      <View>
        <Button
          onPress={this.toggleGeeseSeason}
          title={
            !this.state.isGeeseSeason ? "I saw a goose!" : "Where the geese?"
          }
        />
        <Fade visible={this.state.isGeeseSeason} direction="up">
          <Text>The geese are coming!</Text>
        </Fade>
      </View>
    );
  }
}
```

## Props

| Prop        | Required? | Type                         | Description                                                                                                                                     |
| ----------- | --------- | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `visible`   | true      | boolean                      | Pretty-print the output.                                                                                                                        |
| `direction` | false     | string                       | Can be `"up"` or `"down"`. When the child component fades in there's an optional subtle translation that you can apply with `"up"` or `"down"`. |
| `style`     | false     | React Native Style or Object | Applies style a view around the faded child components                                                                                          |
| `duration`   | false      | number                     | Animation duration
