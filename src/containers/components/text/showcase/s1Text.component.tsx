import React from 'react';
import {
  Text,
  TextProps,
} from '@ui-kitten/components';

type TextElement = React.ReactElement<TextProps>;

export const S1Text = (): TextElement => {
  return (
    <Text
      category='s1'>
      Sample Text
    </Text>
  );
};
