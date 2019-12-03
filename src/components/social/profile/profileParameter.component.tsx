import React from 'react';
import {
  StyleProp,
  TextStyle,
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
  hint: string;
  value: string;
  hintStyle?: StyleProp<TextStyle>;
  valueStyle?: StyleProp<TextStyle>;
}

export type ProfileParameterProps = ThemedComponentProps & ViewProps & ComponentProps;

class ProfileParameterComponent extends React.Component<ProfileParameterProps> {

  public render(): React.ReactNode {
    const { style, themedStyle, hint, value, ...restProps } = this.props;

    return (
      <View
        style={[themedStyle.container, style]}
        {...restProps}>
        <Text
          category='h6'
          status='control'>
          {value}
        </Text>
        <Text
          style={themedStyle.hintLabel}
          status='control'>
          {hint}
        </Text>
      </View>
    );
  }
}

export const ProfileParameter = withStyles(ProfileParameterComponent, (theme: ThemeType) => ({
  container: {
    alignItems: 'center',
  },
}));
