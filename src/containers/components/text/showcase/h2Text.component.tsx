import React from 'react';
import {
  Dimensions,
  StyleSheet,
} from 'react-native';
import {
  Text,
  TextProps,
} from '@ui-kitten/components';

const { width } = Dimensions.get('window');

type TextElement = React.ReactElement<TextProps>;

export const H2Text = (): TextElement => {
  return (
    <Text
      style={styles.text}
      category='h2'>
      Sample Text
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    width: width * 0.55,
  },
});
