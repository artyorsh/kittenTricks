import React from 'react';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import {
  StyleType,
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@ui-kitten/components';
import {
  Avatar,
  AvatarProps,
  TopNavigation,
  TopNavigationAction,
  TopNavigationActionProps,
  TopNavigationProps,
} from '@ui-kitten/components';
import { ArrowBackFill } from '@src/assets/icons';
import { SafeAreaView } from '@src/core/navigation';
import { Profile } from '@src/core/model';

interface ComponentProps {
  interlocutor: Profile;
  lastSeen: string;
  onBack: () => void;
  onProfile: (profile: Profile) => void;
}

export interface ChatHeaderNavigationStateParams {
  interlocutor: Profile;
  lastSeen: string;
  onBack: () => void;
  onProfile: (profile: Profile) => void;
}

export type ChatHeaderProps = ThemedComponentProps & ComponentProps & NavigationStackScreenProps;

class ChatHeaderComponent extends React.Component<ChatHeaderProps> {

  private onBack = (): void => {
    this.props.onBack();
  };

  private onProfile = (): void => {
    const { interlocutor, onProfile } = this.props;

    onProfile(interlocutor);
  };

  private renderLeftControl = (): React.ReactElement<TopNavigationActionProps> => {
    return (
      <TopNavigationAction
        icon={ArrowBackFill}
        onPress={this.onBack}
      />
    );
  };

  private renderProfileAvatar = (style: StyleType): React.ReactElement<AvatarProps> => {
    const { interlocutor, themedStyle } = this.props;

    return (
      <Avatar
        style={themedStyle.avatar}
        source={interlocutor.photo.imageSource}
      />
    );
  };

  private renderRightControls = (): React.ReactElement<TopNavigationActionProps> => {
    const { themedStyle } = this.props;

    return (
      <TopNavigationAction
        icon={this.renderProfileAvatar}
        onPress={this.onProfile}
      />
    );
  };

  private renderInterlocutorProps = (): TopNavigationProps | null => {
    const { interlocutor, lastSeen } = this.props;

    return interlocutor && {
      title: `${interlocutor.firstName} ${interlocutor.lastName}`,
      subtitle: `Last seen ${lastSeen}`,
      rightControls: this.renderRightControls(),
    };
  };

  public render(): React.ReactNode {
    const { themedStyle, interlocutor } = this.props;

    return (
      <SafeAreaView style={themedStyle.container}>
        <TopNavigation
          alignment='center'
          leftControl={this.renderLeftControl()}
          {...this.renderInterlocutorProps()}
        />
      </SafeAreaView>
    );
  }
}

export const ChatHeader = withStyles(ChatHeaderComponent, (theme: ThemeType) => ({
  container: {
    backgroundColor: theme['background-basic-color-1'],
  },
  avatar: {
    width: 40,
    height: 40,
    tintColor: null,
  },
}));

