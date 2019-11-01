import React from 'react';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from 'react-native-ui-kitten';
import { Text } from 'react-native-ui-kitten';
import {
  Chips,
  ChipsProps,
  textStyle,
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
          style={themedStyle.label}
          category='c1'>
          {children}
        </Text>
      </Chips>
    );
  }
}

export const MovieCategoryListItem = withStyles(MovieCategoryListItemComponent, (theme: ThemeType) => ({
  container: {},
  label: {
    color: 'white',
    ...textStyle.caption1,
  },
}));
