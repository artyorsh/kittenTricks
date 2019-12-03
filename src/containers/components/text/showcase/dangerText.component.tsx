import React from 'react';
import {
  Text,
  TextProps,
} from '@kitten/ui';

type TextElement = React.ReactElement<TextProps>;

export const DangerText = (): TextElement => {
  return (
    <Text
      status='danger'>
      Sample Text
    </Text>
  );
};
