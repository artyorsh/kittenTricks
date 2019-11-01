import React from 'react';
import {
  Button,
  ButtonProps,
} from 'react-native-ui-kitten';
import { StarIconFill } from '@src/assets/icons';

type ButtonElement = React.ReactElement<ButtonProps>;

export const RightIconButton = (props?: ButtonProps): ButtonElement => {

  return (
    <Button
      icon={StarIconFill}
      {...props}
      style={[props.style, { flexDirection: 'row-reverse' }]}>
      BUTTON
    </Button>
  );
};
