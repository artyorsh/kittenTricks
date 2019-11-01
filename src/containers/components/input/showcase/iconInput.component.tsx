import React from 'react';
import {
  Input,
  InputProps,
} from 'react-native-ui-kitten';
import { StarIconFill } from '@src/assets/icons';

type InputElement = React.ReactElement<InputProps>;

export const IconInput = (props?: InputProps): InputElement => {
  return (
    <Input
      placeholder='Place your text'
      icon={StarIconFill}
      {...props}
    />
  );
};
