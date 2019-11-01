import React from 'react';
import {
  Text,
  TextProps,
} from 'react-native-ui-kitten';
import { textStyle } from '@src/components/common';

type TextElement = React.ReactElement<TextProps>;

export const C1Text = (): TextElement => {
  return (
    <Text
      style={textStyle.caption1}
      category='c1'>
      Sample Text
    </Text>
  );
};
