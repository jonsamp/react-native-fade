import React, { useEffect, useState } from "react";
import { ViewStyle } from "react-native";
import Animated, { Easing } from "react-native-reanimated";

const { Value, timing } = Animated;

type FadeProps = {
  visible?: boolean;
  style?: ViewStyle;
  children?: any;
  direction?: "up" | "down";
  duration?: number;
};

const opacityValue = new Value(0);
const translationValue = new Value(0);

function Fade(props: FadeProps) {
  const { style, children, direction, visible, duration } = props;
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    opacityValue.setValue(visible ? 1 : (0 as any));
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (!isReady) return;
    const animationConfig = {
      duration: duration || 200,
      easing: Easing.linear
    };
    const opacityConfig = {
      ...animationConfig,
      toValue: visible ? 1 : 0
    };
    const directionConfig = direction === "up" ? [0, 5] : [5, 0];
    const translationConfig = {
      ...animationConfig,
      toValue: visible ? directionConfig[0] : directionConfig[1]
    };

    timing(opacityValue, opacityConfig).start();
    if (direction) timing(translationValue, translationConfig).start();
  }, [visible]);

  return (
    <Animated.View
      style={
        {
          opacity: opacityValue,
          transform: [{ translateY: translationValue }],
          ...style
        } as any
      }
    >
      {children}
    </Animated.View>
  );
}

export default Fade;
