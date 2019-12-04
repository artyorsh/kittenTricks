import React from 'react';
import {
  ImageSourcePropType,
  View,
  ViewProps,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@ui-kitten/components';
import {
  Avatar,
  Text,
} from '@ui-kitten/components';

interface ComponentProps {
  photo: ImageSourcePropType;
  name: string;
  location: string;
  children?: React.ReactNode;
}

export type ProfileInfo1Props = ThemedComponentProps & ViewProps & ComponentProps;

class ProfileInfo1Component extends React.Component<ProfileInfo1Props> {

  public render(): React.ReactNode {
    const { style, themedStyle, photo, name, location, children, ...restProps } = this.props;

    return (
      <View
        style={[themedStyle.container, style]}
        {...restProps}>
        <Avatar
          size='giant'
          source={photo}
        />
        <View style={themedStyle.detailsContainer}>
          <Text
            category='h5'>
            {name}
          </Text>
          <Text
            appearance='hint'
            category='s2'>
            {location}
          </Text>
          {children}
        </View>
      </View>
    );
  }
}

export const ProfileInfo1 = withStyles(ProfileInfo1Component, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 24,
  },
}));
