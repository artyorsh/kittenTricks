import React from 'react';
import {
  Text,
  TextProps,
} from '@ui-kitten/components';

type TextElement = React.ReactElement<TextProps>;

export const H6Text = (): TextElement => {
  return (
    <Text
      category='h6'>
      Sample Text
    </Text>
  );
};
