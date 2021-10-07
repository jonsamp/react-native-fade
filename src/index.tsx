import React, { useEffect, useState } from 'react';
import type { FadeProps } from './Fade';
import Animated, { EasingNode } from 'react-native-reanimated';

const { Value, timing } = Animated;
const opacityValue: any = new Value(0);
const translationValue = new Value(0);

function Fade(props: FadeProps) {
  const { style, children, direction, visible, duration = 200 } = props;
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    opacityValue.setValue(visible ? 1 : 0);
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (!isReady) return;
    const animationConfig = {
      duration: duration,
      easing: EasingNode.linear,
    };
    const opacityConfig = {
      ...animationConfig,
      toValue: visible ? 1 : 0,
    };
    const directionConfig = direction === 'up' ? [0, 5] : [5, 0];
    const translationConfig = {
      ...animationConfig,
      toValue: visible ? directionConfig[0] : directionConfig[1],
    };

    timing(opacityValue, opacityConfig).start();
    if (direction) timing(translationValue, translationConfig).start();
  }, [visible, isReady, direction, duration]);

  return (
    <Animated.View
      style={{
        opacity: opacityValue,
        transform: [{ translateY: translationValue }],
        ...style,
      }}
    >
      {children}
    </Animated.View>
  );
}

export default Fade;
