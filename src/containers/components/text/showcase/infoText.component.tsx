import React from 'react';
import {
  Text,
  TextProps,
} from '@ui-kitten/components';

type TextElement = React.ReactElement<TextProps>;

export const InfoText = (): TextElement => {
  return (
    <Text
      status='info'>
      Sample Text
    </Text>
  );
};
