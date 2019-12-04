import React from 'react';
import {
  Text,
  TextProps,
} from '@ui-kitten/components';

type TextElement = React.ReactElement<TextProps>;

export const SuccessText = (): TextElement => {
  return (
    <Text
      status='success'>
      Sample Text
    </Text>
  );
};
