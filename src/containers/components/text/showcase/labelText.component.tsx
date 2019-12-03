import React from 'react';
import {
  Text,
  TextProps,
} from '@kitten/ui';

type TextElement = React.ReactElement<TextProps>;

export const LabelText = (): TextElement => {
  return (
    <Text
      category='label'>
      Sample Text
    </Text>
  );
};
