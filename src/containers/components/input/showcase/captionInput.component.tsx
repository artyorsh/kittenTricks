import React from 'react';
import {
  Input,
  InputProps,
} from '@ui-kitten/components';

type InputElement = React.ReactElement<InputProps>;

export const CaptionInput = (props?: InputProps): InputElement => {
  return (
    <Input
      placeholder='Place your text'
      caption='Place your text'
      {...props}
    />
  );
};
