import React from 'react';
import {
  View,
  ViewProps,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Text } from '@kitten/ui';

interface ComponentProps {
  description: string;
  value: string;
}

export type MovieDetailListItemProps = ThemedComponentProps & ViewProps & ComponentProps;

class MovieDetailListItemComponent extends React.Component<MovieDetailListItemProps> {

  public render(): React.ReactNode {
    const { style, themedStyle, description, value, ...restProps } = this.props;

    return (
      <View
        {...restProps}
        style={[themedStyle.container, style]}>
        <Text
          appearance='hint'
          category='s1'>
          {description}
        </Text>
        <Text
          category='s1'>
          {value}
        </Text>
      </View>
    );
  }
}

export const MovieDetailListItem = withStyles(MovieDetailListItemComponent, (theme: ThemeType) => ({
  container: {
    alignItems: 'center',
  },
}));
