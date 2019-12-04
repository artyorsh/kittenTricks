import React from 'react';
import {
  Button,
  ButtonGroup,
  ButtonGroupProps,
} from '@ui-kitten/components';
import { StarIconFill } from '@src/assets/icons';

type ButtonGroupElement = React.ReactElement<ButtonGroupProps>;

export const OutlineButtonGroup = (): ButtonGroupElement => {
  return (
    <ButtonGroup appearance='outline'>
      <Button icon={StarIconFill}/>
      <Button icon={StarIconFill}/>
    </ButtonGroup>
  );
};
