import React from 'react';
import {
  Text,
  TextProps,
} from '@ui-kitten/components';

type TextElement = React.ReactElement<TextProps>;

export const WarningText = (): TextElement => {
  return (
    <Text
      status='warning'>
      Sample Text
    </Text>
  );
};
