import React from 'react';
import {
  Button,
  ButtonProps,
} from '@ui-kitten/components';

type ButtonElement = React.ReactElement<ButtonProps>;

export const SuccessButton = (props?: ButtonProps): ButtonElement => {
  return (
    <Button
      status='success'
      {...props}>
      BUTTON
    </Button>
  );
};
