import React from 'react';
import {
  Button,
  ButtonProps,
} from '@ui-kitten/components';

type ButtonElement = React.ReactElement<ButtonProps>;

export const GiantButton = (props?: ButtonProps): ButtonElement => {
  return (
    <Button
      size='giant'
      {...props}>
      BUTTON
    </Button>
  );
};
