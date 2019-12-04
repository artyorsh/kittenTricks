import React from 'react';
import {
  Text,
  TextProps,
} from '@ui-kitten/components';

type TextElement = React.ReactElement<TextProps>;

export const P1Text = (): TextElement => {
  return (
    <Text
      category='p1'>
      Sample Text
    </Text>
  );
};
