import React from 'react';
import {
  Button,
  ButtonProps,
} from '@ui-kitten/components';

type ButtonElement = React.ReactElement<ButtonProps>;

export const WarningButton = (props?: ButtonProps): ButtonElement => {
  return (
    <Button
      status='warning'
      {...props}>
      BUTTON
    </Button>
  );
};
