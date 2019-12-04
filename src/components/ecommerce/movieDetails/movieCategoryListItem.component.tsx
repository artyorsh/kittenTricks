import React from 'react';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@ui-kitten/components';
import { Text } from '@ui-kitten/components';
import {
  Chips,
  ChipsProps,
} from '@src/components/common';

// @ts-ignore (`children` prop override)
interface ComponentProps extends ChipsProps {
  children?: string;
}

export type MovieCategoryListItemProps = ThemedComponentProps & ComponentProps;

class MovieCategoryListItemComponent extends React.Component<MovieCategoryListItemProps> {

  public render(): React.ReactNode {
    const { style, themedStyle, children, ...restProps } = this.props;

    return (
      <Chips
        {...restProps}
        style={[themedStyle.container, style]}>
        <Text
          status='control'
          category='c1'>
          {children}
        </Text>
      </Chips>
    );
  }
}

export const MovieCategoryListItem = withStyles(MovieCategoryListItemComponent, (theme: ThemeType) => ({
  container: {},
}));
