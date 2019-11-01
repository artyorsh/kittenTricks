import React from 'react';
import { OverflowMenuProps } from 'react-native-ui-kitten';
import { OverflowMenuShowcase } from './overflowMenuShowcase.component';

type OverflowMenuElement = React.ReactElement<OverflowMenuProps>;

export const RightStartOverflowMenu = (): OverflowMenuElement => {
  return (
    <OverflowMenuShowcase placement='right start'/>
  );
};
