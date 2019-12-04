import React from 'react';
import {
  Text,
  TextProps,
} from '@ui-kitten/components';

type TextElement = React.ReactElement<TextProps>;

export const H4Text = (): TextElement => {
  return (
    <Text
      category='h4'>
      Sample Text
    </Text>
  );
};
