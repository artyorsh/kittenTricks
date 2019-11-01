import React from 'react';
import {
  Input,
  InputProps,
} from 'react-native-ui-kitten';

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
