import React from 'react';
import {
  ImageBackground,
  ImageSourcePropType,
  View,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  Button,
  Text,
} from '@kitten/ui';
import {
  ProfileActivityList3,
  ProfileFriendList,
  ProfileInfo3,
  ProfileSocials,
} from '@src/components/social';
import {
  MessageCircleIconFill,
  PersonAddIconFill,
  PlusIconFill,
} from '@src/assets/icons';
import {
  Profile as ProfileModel,
  ProfileActivity as ProfileActivityModel,
  ProfileSocials as ProfileSocialsModel,
} from '@src/core/model';
import { ContainerView } from '@src/components/common';
import { imageBrandBg } from '@src/assets/images';
import { AppriseButton } from '@src/components/appriseButton.component';

interface ComponentProps {
  profile: ProfileModel;
  socials: ProfileSocialsModel;
  activities: ProfileActivityModel[];
  onFollowPress: () => void;
  onMessagePress: () => void;
  onFollowersPress: () => void;
  onFollowingPress: () => void;
  onPostsPress: () => void;
  onFriendPress: (index: number) => void;
  onPhotoPress: (index: number) => void;
}

export type Profile7Props = ThemedComponentProps & ComponentProps;

class Profile7Component extends React.Component<Profile7Props> {

  private onFollowPress = () => {
    this.props.onFollowPress();
  };

  private onMessagePress = () => {
    this.props.onMessagePress();
  };

  private onFollowersPress = () => {
    this.props.onFollowersPress();
  };

  private onFollowingPress = () => {
    this.props.onFollowingPress();
  };

  private onPostsPress = () => {
    this.props.onPostsPress();
  };

  private onFriendPress = (index: number) => {
    this.props.onFriendPress(index);
  };

  private onPhotoPress = (index: number) => {
    this.props.onPhotoPress(index);
  };

  private createActivitySource = (activity: ProfileActivityModel): ImageSourcePropType => {
    return activity.source.imageSource;
  };

  public render(): React.ReactNode {
    const { themedStyle, profile, socials, activities } = this.props;

    return (
      <ContainerView style={themedStyle.container}>
        <ImageBackground
          style={themedStyle.profileInfoContainer}
          source={imageBrandBg.imageSource}>
          <ProfileInfo3
            photo={profile.photo.imageSource}
            name={`${profile.firstName} ${profile.lastName}`}
            location={profile.location}
          />
          <View style={themedStyle.actionContainer}>
            <Button
              style={themedStyle.followButton}
              icon={PersonAddIconFill}
              onPress={this.onFollowPress}>
              FOLLOW
            </Button>
            <Button
              style={themedStyle.messageButton}
              status='control'
              icon={MessageCircleIconFill}
              onPress={this.onMessagePress}>
              MESSAGE
            </Button>
          </View>
          <ProfileSocials
            style={themedStyle.profileSocials}
            textStyle={themedStyle.socialsLabel}
            followers={socials.followers}
            following={socials.following}
            posts={socials.posts}
            onFollowersPress={this.onFollowersPress}
            onFollowingPress={this.onFollowingPress}
            onPostsPress={this.onPostsPress}
          />
        </ImageBackground>
        <View
          style={[themedStyle.profileSection, themedStyle.aboutSection]}>
          <Text
            style={themedStyle.profileSectionLabel}
            category='s1'>
            About
          </Text>
          <Text
            style={[themedStyle.profileSectionContent, themedStyle.profileAboutLabel]}
            appearance='hint'>
            {profile.about}
          </Text>
        </View>
        <View style={themedStyle.profileSection}>
          <Text style={[themedStyle.profileSectionLabel, themedStyle.friendsSectionLabel]}>Friends</Text>
          <View style={themedStyle.friendsSection}>
            <ProfileFriendList
              style={{ flexGrow: 0 }}
              data={profile.friends}
              onItemPress={this.onFriendPress}
            />
            <AppriseButton
              style={themedStyle.addFriendButton}
              appearance='outline'
              status='control'
              icon={PlusIconFill}
            />
          </View>
        </View>
        <View style={themedStyle.profileSection}>
          <Text style={themedStyle.profileSectionLabel}>Shots</Text>
          <ProfileActivityList3
            contentContainerStyle={[themedStyle.profileSectionContent]}
            data={activities.map(this.createActivitySource)}
            onItemPress={this.onPhotoPress}
          />
        </View>
      </ContainerView>
    );
  }
}

export const Profile7 = withStyles(Profile7Component, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['background-basic-color-2'],
  },
  profileInfoContainer: {
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  profileSocials: {
    justifyContent: 'space-evenly',
    marginTop: 24,
    paddingVertical: 16,
  },
  actionContainer: {
    flexDirection: 'row',
    marginTop: 32,
  },
  profileSection: {
    marginTop: 32,
  },
  profileSectionContent: {
    marginTop: 8,
  },
  socialsLabel: {
    color: 'white',
  },
  followButton: {
    flex: 1,
    marginRight: 4,
    paddingHorizontal: 0,
  },
  messageButton: {
    flex: 1,
    marginLeft: 4,
  },
  profileSectionLabel: {
    marginHorizontal: 16,
  },
  aboutSection: {
    marginTop: 24,
  },
  profileAboutLabel: {
    marginHorizontal: 16,
  },
  shotsSection: {
    marginBottom: 32,
  },
  friendsSection: {
    flexDirection: 'row',
    paddingHorizontal: 12,
  },
  addFriendButton: {
    marginHorizontal: 12,
  },
}));
