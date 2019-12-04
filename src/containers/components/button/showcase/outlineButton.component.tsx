import React from 'react';
import {
  Button,
  ButtonProps,
} from '@ui-kitten/components';

type ButtonElement = React.ReactElement<ButtonProps>;

export const OutlineButton = (props?: ButtonProps): ButtonElement => {
  return (
    <Button
      appearance='outline'
      {...props}>
      BUTTON
    </Button>
  );
};
