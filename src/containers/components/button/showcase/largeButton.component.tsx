import React from 'react';
import {
  Button,
  ButtonProps,
} from 'react-native-ui-kitten';

type ButtonElement = React.ReactElement<ButtonProps>;

export const LargeButton = (props?: ButtonProps): ButtonElement => {
  return (
    <Button
      size='large'
      {...props}>
      BUTTON
    </Button>
  );
};
