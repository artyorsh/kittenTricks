import React from 'react';
import {
  Text,
  TextProps,
} from '@kitten/ui';

type TextElement = React.ReactElement<TextProps>;

export const S1Text = (): TextElement => {
  return (
    <Text
      category='s1'>
      Sample Text
    </Text>
  );
};
