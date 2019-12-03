import React from 'react';
import {
  ImageBackground,
  ImageProps,
  View,
} from 'react-native';
import {
  StyleType,
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  Button,
  Text,
} from '@kitten/ui';
import {
  SignInForm1,
  SignInForm1Data,
  SocialAuth,
} from '@src/components/auth';
import { ScrollableAvoidKeyboard } from '@src/components/common';
import {
  ArrowForwardIconOutline,
  HeartIconFill,
} from '@src/assets/icons';
import {
  imageSignIn1Bg,
  ImageSource,
} from '@src/assets/images';

interface ComponentProps {
  onSignInPress: (formData: SignInForm1Data) => void;
  onSignUpPress: () => void;
  onGooglePress: () => void;
  onFacebookPress: () => void;
  onTwitterPress: () => void;
  onEwaPress: () => void;
}

export type SignIn1Props = ThemedComponentProps & ComponentProps;

interface State {
  formData: SignInForm1Data | undefined;
}

class SignIn1Component extends React.Component<SignIn1Props, State> {

  public state: State = {
    formData: undefined,
  };

  private backgroundImage: ImageSource = imageSignIn1Bg;

  private onSignInButtonPress = () => {
    this.props.onSignInPress(this.state.formData);
  };

  private onSignUpButtonPress = () => {
    this.props.onSignUpPress();
  };

  private onGoogleButtonPress = () => {
    this.props.onGooglePress();
  };

  private onFacebookButtonPress = () => {
    this.props.onFacebookPress();
  };

  private onTwitterButtonPress = () => {
    this.props.onTwitterPress();
  };

  private onEwaButtonPress = () => {
    this.props.onEwaPress();
  };

  private onFormDataChange = (formData: SignInForm1Data) => {
    this.setState({ formData });
  };

  public render(): React.ReactNode {
    const { themedStyle } = this.props;

    return (
      <ScrollableAvoidKeyboard>
        <ImageBackground
          style={themedStyle.container}
          source={this.backgroundImage.imageSource}>
          <Button
            appearance='ghost'
            style={themedStyle.ewaButton}
            status='control'
            size='large'
            icon={HeartIconFill}
            onPress={this.onEwaButtonPress}>
            EWA
          </Button>
          <View style={themedStyle.signInContainer}>
            <Text
              style={themedStyle.signInLabel}
              category='h4'
              status='control'>
              SIGN IN
            </Text>
            <Button
              style={themedStyle.signUpButton}
              appearance='ghost'
              size='giant'
              status='control'
              icon={ArrowForwardIconOutline}
              onPress={this.onSignUpButtonPress}>
              Sign Up
            </Button>
          </View>
          <SignInForm1
            style={themedStyle.formContainer}
            onDataChange={this.onFormDataChange}
          />
          <Button
            size='large'
            disabled={!this.state.formData}
            onPress={this.onSignInButtonPress}>
            SIGN IN
          </Button>
          <SocialAuth
            style={themedStyle.socialAuthContainer}
            hintStyle={themedStyle.socialAuthHint}
            hint='Sign with a social account'
            onGooglePress={this.onGoogleButtonPress}
            onFacebookPress={this.onFacebookButtonPress}
            onTwitterPress={this.onTwitterButtonPress}
          />
        </ImageBackground>
      </ScrollableAvoidKeyboard>
    );
  }
}

export const SignIn1 = withStyles(SignIn1Component, (theme: ThemeType) => ({
  container: {
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  signInContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
  },
  socialAuthContainer: {
    marginTop: 48,
  },
  ewaButton: {
    maxWidth: 72,
    paddingHorizontal: 0,
  },
  ewaButtonIcon: {
    marginHorizontal: 0,
  },
  formContainer: {
    flex: 1,
    marginTop: 48,
  },
  signInLabel: {
    flex: 1,
  },
  signUpButton: {
    flexDirection: 'row-reverse',
    paddingHorizontal: 0,
  },
  socialAuthHint: {
    color: 'white',
  },
}));


