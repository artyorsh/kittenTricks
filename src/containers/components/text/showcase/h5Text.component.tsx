import React from 'react';
import {
  Text,
  TextProps,
} from '@kitten/ui';

type TextElement = React.ReactElement<TextProps>;

export const H5Text = (): TextElement => {
  return (
    <Text
      category='h5'>
      Sample Text
    </Text>
  );
};
