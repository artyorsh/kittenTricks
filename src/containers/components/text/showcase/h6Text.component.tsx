import React from 'react';
import {
  Text,
  TextProps,
} from '@kitten/ui';

type TextElement = React.ReactElement<TextProps>;

export const H6Text = (): TextElement => {
  return (
    <Text
      category='h6'>
      Sample Text
    </Text>
  );
};
