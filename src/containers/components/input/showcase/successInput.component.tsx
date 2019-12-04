import React from 'react';
import {
  Input,
  InputProps,
} from '@ui-kitten/components';

type InputElement = React.ReactElement<InputProps>;

export const SuccessInput = (props?: InputProps): InputElement => {
  return (
    <Input
      placeholder='Place your text'
      status='success'
      {...props}
    />
  );
};
