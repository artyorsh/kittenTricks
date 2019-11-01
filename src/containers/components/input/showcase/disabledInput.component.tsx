import React from 'react';
import {
  Input,
  InputProps,
} from 'react-native-ui-kitten';

type InputElement = React.ReactElement<InputProps>;

export const DisabledInput = (props?: InputProps): InputElement => {
  return (
    <Input
      placeholder='Place your text'
      disabled={true}
      {...props}
    />
  );
};
