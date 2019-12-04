import React from 'react';
import { OverflowMenuProps } from '@ui-kitten/components';
import { OverflowMenuShowcase } from './overflowMenuShowcase.component';

type OverflowMenuElement = React.ReactElement<OverflowMenuProps>;

export const LeftOverflowMenu = (): OverflowMenuElement => {
  return (
    <OverflowMenuShowcase placement='left'/>
  );
};
