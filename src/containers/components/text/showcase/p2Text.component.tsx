import React from 'react';
import {
  Text,
  TextProps,
} from '@kitten/ui';

type TextElement = React.ReactElement<TextProps>;

export const P2Text = (): TextElement => {
  return (
    <Text
      category='p2'>
      Sample Text
    </Text>
  );
};
