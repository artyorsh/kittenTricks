import React from 'react';
import {
  Button,
  ButtonProps,
} from '@ui-kitten/components';

type ButtonElement = React.ReactElement<ButtonProps>;

export const FilledButton = (props?: ButtonProps): ButtonElement => {
  return (
    <Button
      appearance='filled'
      {...props}>
      BUTTON
    </Button>
  );
};
