import React from 'react';
import {
  Text,
  TextProps,
} from '@ui-kitten/components';

type TextElement = React.ReactElement<TextProps>;

export const C1Text = (): TextElement => {
  return (
    <Text
      category='c1'>
      Sample Text
    </Text>
  );
};
