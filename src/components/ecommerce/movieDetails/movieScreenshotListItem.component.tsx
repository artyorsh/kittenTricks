import React from 'react';
import {
  Image,
  ImageProps,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from 'react-native-ui-kitten';

export type MovieScreenshotListItemProps = ThemedComponentProps & ImageProps;

class MovieScreenshotListItemComponent extends React.Component<MovieScreenshotListItemProps> {

  public render(): React.ReactNode {
    const { themedStyle, style, ...restProps } = this.props;

    return (
      <Image
        style={themedStyle.item}
        {...restProps}
      />
    );
  }
}

export const MovieScreenshotListItem = withStyles(MovieScreenshotListItemComponent, (theme: ThemeType) => ({
  container: {},
}));
