import React from 'react';
import {
  Button,
  ButtonProps,
} from 'react-native-ui-kitten';

type ButtonElement = React.ReactElement<ButtonProps>;

export const BasicButton = (props?: ButtonProps): ButtonElement => {
  return (
    <Button
      status='basic'
      {...props}>
      BUTTON
    </Button>
  );
};
