import React from 'react';
import { ModalProps } from '@ui-kitten/components';
import { ModalShowcase } from './modalShowcase.component';

type ModalElement = React.ReactElement<ModalProps>;

export const DefaultModal = (): ModalElement => {
  return (
    <ModalShowcase/>
  );
};
