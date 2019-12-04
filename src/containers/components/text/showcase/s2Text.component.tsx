import React from 'react';
import {
  Text,
  TextProps,
} from '@ui-kitten/components';

type TextElement = React.ReactElement<TextProps>;

export const S2Text = (): TextElement => {
  return (
    <Text
      category='s2'>
      Sample Text
    </Text>
  );
};
