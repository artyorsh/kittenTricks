import React from 'react';
import { TooltipProps } from 'react-native-ui-kitten';
import { TooltipShowcase } from './tooltipShowcase.component';
import { StarIconFill } from '@src/assets/icons';

type TooltipElement = React.ReactElement<TooltipProps>;

export const IconTooltip = (): TooltipElement => {
  return (
    <TooltipShowcase icon={StarIconFill}/>
  );
};
