import React from 'react';
import {
  Text,
  TextProps,
} from '@kitten/ui';

type TextElement = React.ReactElement<TextProps>;

export const C2Text = (): TextElement => {
  return (
    <Text
      category='c2'>
      Sample Text
    </Text>
  );
};
