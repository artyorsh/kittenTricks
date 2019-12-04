import React from 'react';
import {
  Text,
  TextProps,
} from '@ui-kitten/components';

type TextElement = React.ReactElement<TextProps>;

export const C2Text = (): TextElement => {
  return (
    <Text
      category='c2'>
      Sample Text
    </Text>
  );
};
