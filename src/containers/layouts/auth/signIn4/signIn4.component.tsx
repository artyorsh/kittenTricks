import React from 'react';
import {
  Image,
  ImageBackground,
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
  SignInForm2,
  SignInForm2Data,
  SocialAuth,
} from '@src/components/auth';
import { ScrollableAvoidKeyboard } from '@src/components/common';
import {
  imageBrandBg,
  imageBrandLogo,
} from '@src/assets/images';

interface ComponentProps {
  onForgotPasswordPress: () => void;
  onSignInPress: (formData: SignInForm2Data) => void;
  onSignUpPress: () => void;
  onGooglePress: () => void;
  onFacebookPress: () => void;
  onTwitterPress: () => void;
}

export type SignIn4Props = ThemedComponentProps & ComponentProps;

interface State {
  formData: SignInForm2Data;
}

class SignIn4Component extends React.Component<SignIn4Props, State> {

  public state: State = {
    formData: undefined,
  };

  private onForgotPasswordButtonPress = () => {
    this.props.onForgotPasswordPress();
  };

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

  private onFormDataChange = (formData: SignInForm2Data) => {
    this.setState({ formData });
  };

  public render(): React.ReactNode {
    const { themedStyle } = this.props;

    return (
      <ScrollableAvoidKeyboard>
        <ImageBackground
          style={themedStyle.container}
          source={imageBrandBg.imageSource}>
          <View style={themedStyle.headerContainer}>
            <Image
              style={themedStyle.headerImage}
              source={imageBrandLogo.imageSource}
            />
            <Text status='control'>
              Sign in to your account
            </Text>
          </View>
          <SignInForm2
            style={themedStyle.formContainer}
            onForgotPasswordPress={this.onForgotPasswordButtonPress}
            onDataChange={this.onFormDataChange}
          />
          <Button
            style={themedStyle.signInButton}
            status='control'
            size='giant'
            onPress={this.onSignInButtonPress}>
            SIGN IN
          </Button>
          <SocialAuth
            style={themedStyle.socialAuthContainer}
            onGooglePress={this.onGoogleButtonPress}
            onFacebookPress={this.onFacebookButtonPress}
            onTwitterPress={this.onTwitterButtonPress}
          />
          <Button
            style={themedStyle.signUpButton}
            appearance='ghost'
            status='control'
            onPress={this.onSignUpButtonPress}>
            Don't have an account? Sign Up
          </Button>
        </ImageBackground>
      </ScrollableAvoidKeyboard>
    );
  }
}

export const SignIn4 = withStyles(SignIn4Component, (theme: ThemeType) => ({
  container: {
    flex: 1,
  },
  headerContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 128,
    marginTop: 96,
    marginBottom: 16,
  },
  headerImage: {
    width: 106,
    height: 84,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  socialAuthContainer: {
    marginTop: 32,
  },
  signInButton: {
    marginHorizontal: 16,
  },
  signUpButton: {
    marginVertical: 12,
  },
}));

