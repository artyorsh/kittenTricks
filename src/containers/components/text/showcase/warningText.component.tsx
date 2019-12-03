import React from 'react';
import {
  Text,
  TextProps,
} from '@kitten/ui';

type TextElement = React.ReactElement<TextProps>;

export const WarningText = (): TextElement => {
  return (
    <Text
      status='warning'>
      Sample Text
    </Text>
  );
};
