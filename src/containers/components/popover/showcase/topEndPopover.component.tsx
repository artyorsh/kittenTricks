import React from 'react';
import { PopoverProps } from 'react-native-ui-kitten';
import { PopoverShowcase } from './popoverShowcase.component';

type PopoverElement = React.ReactElement<PopoverProps>;

export const TopEndPopover = (): PopoverElement => {
  return (
    <PopoverShowcase placement='top end'/>
  );
};
