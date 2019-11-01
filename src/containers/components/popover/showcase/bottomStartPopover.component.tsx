import React from 'react';
import { PopoverProps } from 'react-native-ui-kitten';
import { PopoverShowcase } from './popoverShowcase.component';

type PopoverElement = React.ReactElement<PopoverProps>;

export const BottomStartPopover = (): PopoverElement => {
  return (
    <PopoverShowcase placement='bottom start'/>
  );
};
