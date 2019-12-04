import React from 'react';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@ui-kitten/components';
import { Text } from '@ui-kitten/components';
import {
  ImageOverlay,
  ImageOverlayProps,
} from '@src/components/common';

interface ComponentProps {
  title: string;
  description: string;
}

export type ArticleHeaderProps = ThemedComponentProps & ImageOverlayProps & ComponentProps;

class ArticleHeaderComponent extends React.Component<ArticleHeaderProps> {

  public render(): React.ReactNode {
    const { style, themedStyle, title, description, children, ...restProps } = this.props;
    const { button: buttonStyle, ...componentStyle } = themedStyle;

    return (
      <ImageOverlay
        {...restProps}
        style={[componentStyle.container, style]}>
        <Text
          style={componentStyle.titleLabel}
          category='h3'
          status='control'>
          {title}
        </Text>
        <Text
          category='h6'
          status='control'>
          {description}
        </Text>
        {children}
      </ImageOverlay>
    );
  }
}

export const ArticleHeader = withStyles(ArticleHeaderComponent, (theme: ThemeType) => ({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 64,
  },
  titleLabel: {
    textAlign: 'center',
  },
}));
