import React from 'react';
import {
  Text,
  TextProps,
} from '@kitten/ui';

type TextElement = React.ReactElement<TextProps>;

export const SuccessText = (): TextElement => {
  return (
    <Text
      status='success'>
      Sample Text
    </Text>
  );
};
