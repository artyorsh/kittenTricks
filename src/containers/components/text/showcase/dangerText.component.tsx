import React from 'react';
import {
  Text,
  TextProps,
} from '@ui-kitten/components';

type TextElement = React.ReactElement<TextProps>;

export const DangerText = (): TextElement => {
  return (
    <Text
      status='danger'>
      Sample Text
    </Text>
  );
};
