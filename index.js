import React, { Component } from "react";
import PropTypes from "prop-types";
import { Animated } from "react-native";

class Fade extends Component {
  static propTypes = {
    visible: PropTypes.bool,
    style: PropTypes.any,
    children: PropTypes.any,
    direction: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      visible: props.visible
    };
  }

  componentWillMount() {
    this.visibility = new Animated.Value(0);
  }

  componentWillReceiveProps({ visible }) {
    Animated.timing(this.visibility, {
      toValue: visible ? 1 : 0,
      duration: 200
    }).start(() => !visible && this.setState({ visible }));

    if (visible) this.setState({ visible });
  }

  render() {
    const { visible, style, children, direction, ...rest } = this.props;

    const directions = {
      up: [5, 0],
      down: [-5, 0]
    };

    const test = this.visibility.interpolate({
      inputRange: [0, 1],
      outputRange: directions[direction] || [0, 0]
    });

    const containerStyle = {
      opacity: this.visibility.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
      }),
      transform: [
        {
          translateY: test
        }
      ]
    };

    const combinedStyle = [containerStyle, style];
    return (
      <Animated.View
        style={this.state.visible ? combinedStyle : containerStyle}
        {...rest}
      >
        {this.state.visible ? children : null}
      </Animated.View>
    );
  }
}

export default Fade;
