import type { ViewStyle } from 'react-native';

export type FadeProps = {
  visible?: boolean;
  style?: ViewStyle;
  children?: any;
  direction?: 'up' | 'down';
  duration?: number;
};
