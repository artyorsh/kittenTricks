import React from 'react';
import {
  Text,
  TextProps,
} from '@kitten/ui';

type TextElement = React.ReactElement<TextProps>;

export const H3Text = (): TextElement => {
  return (
    <Text
      category='h3'>
      Sample Text
    </Text>
  );
};
