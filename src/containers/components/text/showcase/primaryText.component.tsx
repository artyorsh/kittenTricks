import React from 'react';
import {
  Text,
  TextProps,
} from '@ui-kitten/components';

type TextElement = React.ReactElement<TextProps>;

export const PrimaryText = (): TextElement => {
  return (
    <Text
      status='primary'>
      Sample Text
    </Text>
  );
};
