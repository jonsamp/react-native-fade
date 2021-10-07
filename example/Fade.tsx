import React, { useEffect } from 'react';
import Animated, {
  Easing,
  withTiming,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

function Fade(props: any) {
  const { style, children, direction, visible, duration = 200 } = props;

  function getInitialTranslationValue() {
    if (direction === 'up') {
      return -5;
    } else if (direction === 'down') {
      return 5;
    } else {
      return 0;
    }
  }

  const opacityValue = useSharedValue(1);
  const translationValue = useSharedValue(getInitialTranslationValue());

  const opacityStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacityValue.value, {
        duration,
        easing: Easing.linear,
      }),
    };
  });

  const translationStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withTiming(translationValue.value, {
            duration,
            easing: Easing.linear,
          }),
        },
      ],
    };
  });

  useEffect(
    function didUpdate() {
      if (visible) {
        opacityValue.value = 1;
      } else {
        opacityValue.value = 0;
      }

      if (direction) {
        if (visible) {
          translationValue.value = 0;
        } else {
          if (direction === 'up') {
            translationValue.value = 5;
          } else if (direction === 'down') {
            translationValue.value = -5;
          } else {
          }
        }
      }
    },
    [visible]
  );

  return (
    <Animated.View style={[opacityStyle, translationStyle, style]}>
      {children}
    </Animated.View>
  );
}

export default Fade;
