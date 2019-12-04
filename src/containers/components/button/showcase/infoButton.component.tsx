import React from 'react';
import {
  Button,
  ButtonProps,
} from '@ui-kitten/components';

type ButtonElement = React.ReactElement<ButtonProps>;

export const InfoButton = (props?: ButtonProps): ButtonElement => {
  return (
    <Button
      status='info'
      {...props}>
      BUTTON
    </Button>
  );
};
