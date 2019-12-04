import React from 'react';
import {
  Input,
  InputProps,
} from '@ui-kitten/components';

type InputElement = React.ReactElement<InputProps>;

export const LabelInput = (props?: InputProps): InputElement => {
  return (
    <Input
      placeholder='Place your text'
      label='Place your text'
      {...props}
    />
  );
};
