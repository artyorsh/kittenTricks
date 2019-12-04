import React from 'react';
import { TooltipProps } from '@ui-kitten/components';
import { TooltipShowcase } from './tooltipShowcase.component';

type TooltipElement = React.ReactElement<TooltipProps>;

export const BottomTooltip = (): TooltipElement => {
  return (
    <TooltipShowcase placement='bottom'/>
  );
};
