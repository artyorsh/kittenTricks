import React from 'react';
import {
  Button,
  ButtonGroup,
  ButtonGroupProps,
} from 'react-native-ui-kitten';
import { StarIconFill } from '@src/assets/icons';

type ButtonGroupElement = React.ReactElement<ButtonGroupProps>;

export const TinyButtonGroup = (): ButtonGroupElement => {
  return (
    <ButtonGroup size='tiny'>
      <Button icon={StarIconFill}/>
      <Button icon={StarIconFill}/>
    </ButtonGroup>
  );
};
