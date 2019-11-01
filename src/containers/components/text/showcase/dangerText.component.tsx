import React from 'react';
import {
  Text,
  TextProps,
} from 'react-native-ui-kitten';
import { textStyle } from '@src/components/common';

type TextElement = React.ReactElement<TextProps>;

export const DangerText = (): TextElement => {
  return (
    <Text
      style={textStyle.paragraph}
      status='danger'>
      Sample Text
    </Text>
  );
};
