import React from 'react';
import {
  Text,
  TextProps,
} from '@ui-kitten/components';

type TextElement = React.ReactElement<TextProps>;

export const LabelText = (): TextElement => {
  return (
    <Text
      category='label'>
      Sample Text
    </Text>
  );
};
