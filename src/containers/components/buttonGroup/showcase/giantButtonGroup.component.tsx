import React from 'react';
import {
  Button,
  ButtonGroup,
  ButtonGroupProps,
} from '@ui-kitten/components';
import { StarIconFill } from '@src/assets/icons';

type ButtonGroupElement = React.ReactElement<ButtonGroupProps>;

export const GiantButtonGroup = (): ButtonGroupElement => {
  return (
    <ButtonGroup size='giant'>
      <Button icon={StarIconFill}/>
      <Button icon={StarIconFill}/>
    </ButtonGroup>
  );
};
