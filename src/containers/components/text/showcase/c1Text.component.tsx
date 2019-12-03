import React from 'react';
import {
  Text,
  TextProps,
} from '@kitten/ui';

type TextElement = React.ReactElement<TextProps>;

export const C1Text = (): TextElement => {
  return (
    <Text
      category='c1'>
      Sample Text
    </Text>
  );
};
