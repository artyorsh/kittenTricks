import React from 'react';
import { TooltipProps } from 'react-native-ui-kitten';
import { TooltipShowcase } from './tooltipShowcase.component';

type TooltipElement = React.ReactElement<TooltipProps>;

export const LeftEndTooltip = (): TooltipElement => {
  return (
    <TooltipShowcase placement='left end'/>
  );
};
