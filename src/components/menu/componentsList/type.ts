import React from 'react';
import { ImageProps } from 'react-native';
import { StyleType } from 'react-native-ui-kitten';
import { ThemeKey } from '@src/core/themes';

export interface ComponentsListItemData {
  title: string;
  icon: (style: StyleType, theme: ThemeKey) => React.ReactElement<ImageProps>;
}
