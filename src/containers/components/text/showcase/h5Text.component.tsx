import React from 'react';
import {
  Text,
  TextProps,
} from '@ui-kitten/components';

type TextElement = React.ReactElement<TextProps>;

export const H5Text = (): TextElement => {
  return (
    <Text
      category='h5'>
      Sample Text
    </Text>
  );
};
