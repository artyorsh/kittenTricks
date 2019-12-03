import React from 'react';
import {
  Text,
  TextProps,
} from '@kitten/ui';

type TextElement = React.ReactElement<TextProps>;

export const H4Text = (): TextElement => {
  return (
    <Text
      category='h4'>
      Sample Text
    </Text>
  );
};
