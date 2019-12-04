import React from 'react';
import { PopoverProps } from '@ui-kitten/components';
import { PopoverShowcase } from './popoverShowcase.component';

type PopoverElement = React.ReactElement<PopoverProps>;

export const RightStartPopover = (): PopoverElement => {
  return (
    <PopoverShowcase placement='right start'/>
  );
};
