import React from 'react';
import {
  ButtonProps,
  View,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@ui-kitten/components';
import {
  Button,
  Text,
} from '@ui-kitten/components';
import {
  ProfileSetting,
  ProfilePhoto,
} from '@src/components/social';
import { CameraIconFill } from '@src/assets/icons';
import { Profile } from '@src/core/model';
import { ContainerView } from '@src/components/common';

interface ComponentProps {
  profile: Profile;
  onUploadPhotoButtonPress: () => void;
  onButtonPress: () => void;
}

export type ProfileSettings3Props = ThemedComponentProps & ComponentProps;

class ProfileSettings3Component extends React.Component<ProfileSettings3Props> {

  private onButtonPress = () => {
    this.props.onButtonPress();
  };

  private onPhotoButtonPress = () => {
    this.props.onUploadPhotoButtonPress();
  };

  private renderPhotoButton = (): React.ReactElement<ButtonProps> => {
    const { themedStyle } = this.props;

    return (
      <Button
        style={themedStyle.photoButton}
        status='basic'
        icon={CameraIconFill}
        onPress={this.onPhotoButtonPress}
      />
    );
  };

  public render(): React.ReactNode {
    const { themedStyle, profile } = this.props;

    return (
      <ContainerView style={themedStyle.container}>
        <View style={themedStyle.photoSection}>
          <ProfilePhoto
            style={themedStyle.photo}
            shape='rounded'
            source={profile.photo.imageSource}
            button={this.renderPhotoButton}
          />
        </View>
        <View style={themedStyle.descriptionSection}>
          <Text
            appearance='hint'>
            {profile.about}
          </Text>
        </View>
        <View style={themedStyle.infoSection}>
          <ProfileSetting
            style={themedStyle.profileSetting}
            hint='First Name'
            value={profile.firstName}
          />
          <ProfileSetting
            style={themedStyle.profileSetting}
            hint='Last Name'
            value={profile.lastName}
          />
          <ProfileSetting
            style={themedStyle.profileSetting}
            hint='Gender'
            value={profile.gender}
          />
          <ProfileSetting
            style={themedStyle.profileSetting}
            hint='Age'
            value={`${profile.age}`}
          />
          <ProfileSetting
            style={themedStyle.profileSetting}
            hint='Weight'
            value={`${profile.weight} kg`}
          />
          <ProfileSetting
            style={themedStyle.profileSetting}
            hint='Height'
            value={`${profile.height} cm`}
          />
        </View>
        <View style={themedStyle.contactSection}>
          <ProfileSetting
            style={themedStyle.profileSetting}
            hint='Email'
            value={profile.email}
          />
          <ProfileSetting
            style={themedStyle.profileSetting}
            hint='Phone Number'
            value={profile.phoneNumber}
          />
        </View>
        <Button
          style={themedStyle.button}
          size='large'
          onPress={this.onButtonPress}>
          DONE
        </Button>
      </ContainerView>
    );
  }
}

export const ProfileSettings3 = withStyles(ProfileSettings3Component, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['background-basic-color-2'],
  },
  photoSection: {
    marginHorizontal: 32,
    marginVertical: 32,
  },
  descriptionSection: {
    paddingHorizontal: 24,
    paddingVertical: 24,
    backgroundColor: theme['background-basic-color-1'],
  },
  infoSection: {
    marginTop: 24,
    backgroundColor: theme['background-basic-color-1'],
  },
  contactSection: {
    marginTop: 24,
    backgroundColor: theme['background-basic-color-1'],
  },
  profileSetting: {
    borderBottomWidth: 1,
    borderBottomColor: theme['border-basic-color-2'],
  },
  photo: {
    width: 320,
    height: 320,
    borderRadius: 16,
    alignSelf: 'center',
  },
  photoButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    left: 256,
    top: 32,
  },
  button: {
    marginHorizontal: 24,
    marginVertical: 24,
  },
}));

