import React from 'react';
import {
  ImageProps,
  View,
} from 'react-native';
import {
  StyleType,
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@ui-kitten/components';
import {
  Button,
  Text,
} from '@ui-kitten/components';
import {
  SignUpForm1,
  SignUpForm1Data,
  SocialAuth,
} from '@src/components/auth';
import {
  ScrollableAvoidKeyboard,
  ImageOverlay,
} from '@src/components/common';
import {
  ArrowForwardIconOutline,
  HeartIconFill,
} from '@src/assets/icons';
import {
  imageSignUp1Bg,
  ImageSource,
} from '@src/assets/images';

interface ComponentProps {
  onSignUpPress: (formData: SignUpForm1Data) => void;
  onSignInPress: () => void;
  onGooglePress: () => void;
  onFacebookPress: () => void;
  onTwitterPress: () => void;
  onEwaPress: () => void;
}

export type SignUp1Props = ThemedComponentProps & ComponentProps;

interface State {
  formData: SignUpForm1Data;
}

class SignUp1Component extends React.Component<SignUp1Props, State> {

  public state: State = {
    formData: undefined,
  };

  private backgroundImage: ImageSource = imageSignUp1Bg;

  private onFormDataChange = (formData: SignUpForm1Data) => {
    this.setState({ formData });
  };

  private onSignUpButtonPress = () => {
    this.props.onSignUpPress(this.state.formData);
  };

  private onSignInButtonPress = () => {
    this.props.onSignInPress();
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

  public render(): React.ReactNode {
    const { themedStyle } = this.props;

    return (
      <ScrollableAvoidKeyboard style={themedStyle.container}>
        <ImageOverlay
          style={themedStyle.headerContainer}
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
          <View style={themedStyle.signUpContainer}>
            <Text
              status='control'
              category='h4'>
              SIGN UP
            </Text>
            <Button
              style={themedStyle.signInButton}
              appearance='ghost'
              size='giant'
              status='control'
              icon={ArrowForwardIconOutline}
              onPress={this.onSignInButtonPress}>
              Sign In
            </Button>
          </View>
        </ImageOverlay>
        <SocialAuth
          style={themedStyle.socialAuthContainer}
          iconStyle={themedStyle.socialAuthIcon}
          hint='Sign with a social account'
          onGooglePress={this.onGoogleButtonPress}
          onFacebookPress={this.onFacebookButtonPress}
          onTwitterPress={this.onTwitterButtonPress}
        />
        <View style={themedStyle.orContainer}>
          <View style={themedStyle.divider}/>
          <Text
            style={themedStyle.orLabel}
            category='h5'>
            OR
          </Text>
          <View style={themedStyle.divider}/>
        </View>
        <Text
          style={themedStyle.emailSignLabel}>
          Sign up with Email
        </Text>
        <SignUpForm1
          style={themedStyle.formContainer}
          onDataChange={this.onFormDataChange}
        />
        <Button
          style={themedStyle.signUpButton}
          size='large'
          disabled={!this.state.formData}
          onPress={this.onSignUpButtonPress}>
          SIGN UP
        </Button>
      </ScrollableAvoidKeyboard>
    );
  }
}

export const SignUp1 = withStyles(SignUp1Component, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['background-basic-color-1'],
  },
  headerContainer: {
    minHeight: 200,
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 44,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 32,
  },
  socialAuthContainer: {
    marginTop: 24,
  },
  formContainer: {
    marginTop: 48,
    paddingHorizontal: 16,
  },
  ewaButton: {
    maxWidth: 72,
    paddingHorizontal: 0,
  },
  ewaButtonIcon: {
    marginHorizontal: 0,
    tintColor: 'white',
  },
  signInLabel: {
    flex: 1,
  },
  signInButton: {
    flexDirection: 'row-reverse',
    paddingHorizontal: 0,
  },
  signUpButton: {
    marginVertical: 24,
    marginHorizontal: 16,
  },
  socialAuthIcon: {
    tintColor: theme['text-basic-color'],
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 52,
  },
  orLabel: {
    marginHorizontal: 8,
  },
  emailSignLabel: {
    alignSelf: 'center',
    marginTop: 8,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: theme['background-basic-color-3'],
  },
}));

