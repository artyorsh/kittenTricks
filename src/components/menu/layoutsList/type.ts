import React from 'react';
import { ImageProps } from 'react-native';
import { StyleType } from 'react-native-ui-kitten';
import { ThemeKey } from '@src/core/themes';

export interface LayoutsListItemData {
  title: string;
  icon: (style: StyleType, currentTheme: ThemeKey) => React.ReactElement<ImageProps>;
}
