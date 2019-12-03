import React from 'react';
import {
  Dimensions,
  StyleSheet,
} from 'react-native';
import {
  Text,
  TextProps,
} from '@kitten/ui';

const { width } = Dimensions.get('window');

type TextElement = React.ReactElement<TextProps>;

export const H1Text = (): TextElement => {
  return (
    <Text
      style={styles.text}
      numberOfLines={1}
      ellipsizeMode='tail'
      category='h1'>
      Sample Text
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    width: width * 0.55,
  },
});
