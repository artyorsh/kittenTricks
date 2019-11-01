import React from 'react';
import {
  Button,
  ButtonGroup,
  ButtonGroupProps,
} from 'react-native-ui-kitten';
import { StarIconFill } from '@src/assets/icons';

type ButtonGroupElement = React.ReactElement<ButtonGroupProps>;

export const SmallButtonGroup = (): ButtonGroupElement => {
  return (
    <ButtonGroup size='small'>
      <Button icon={StarIconFill}/>
      <Button icon={StarIconFill}/>
    </ButtonGroup>
  );
};
