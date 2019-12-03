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
  SignUpForm2,
  SignUpForm2Data,
  SocialAuth,
} from '@src/components/auth';
import { ScrollableAvoidKeyboard } from '@src/components/common';
import {
  imageBrandBg,
  imageBrandLogo,
} from '@src/assets/images';

interface ComponentProps {
  onSignUpPress: (formData: SignUpForm2Data) => void;
  onSignInPress: () => void;
  onGooglePress: () => void;
  onFacebookPress: () => void;
  onTwitterPress: () => void;
  onPhotoPress: () => void;
}

export type SignUp4Props = ThemedComponentProps & ComponentProps;

interface State {
  formData: SignUpForm2Data | undefined;
}

class SignUp4Component extends React.Component<SignUp4Props, State> {

  public state: State = {
    formData: undefined,
  };

  private onFormDataChange = (formData: SignUpForm2Data) => {
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
          <SignUpForm2
            style={themedStyle.formContainer}
            onDataChange={this.onFormDataChange}
          />
          <Button
            style={themedStyle.signUpButton}
            status='control'
            size='giant'
            onPress={this.onSignUpButtonPress}>
            SIGN UP
          </Button>
          <SocialAuth
            onGooglePress={this.onGoogleButtonPress}
            onFacebookPress={this.onFacebookButtonPress}
            onTwitterPress={this.onTwitterButtonPress}
          />
          <Button
            style={themedStyle.signInButton}
            appearance='ghost'
            status='control'
            activeOpacity={0.75}
            onPress={this.onSignInButtonPress}>
            Already have account? Sign In
          </Button>
        </ImageBackground>
      </ScrollableAvoidKeyboard>
    );
  }
}

export const SignUp4 = withStyles(SignUp4Component, (theme: ThemeType) => ({
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
  signUpButton: {
    marginVertical: 16,
    marginHorizontal: 16,
  },
  signInButton: {
    marginVertical: 12,
  },
}));

