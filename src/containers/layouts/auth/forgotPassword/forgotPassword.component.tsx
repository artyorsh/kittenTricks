import React from 'react';
import { ImageBackground } from 'react-native';
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
  ForgotPasswordForm,
  ForgotPasswordFormData,
} from '@src/components/auth';
import { ScrollableAvoidKeyboard } from '@src/components/common';
import { imageBrandBg } from '@src/assets/images';

interface ComponentProps {
  onResetPress: (formData: ForgotPasswordFormData) => void;
}

export type ForgotPasswordProps = ThemedComponentProps & ComponentProps;

interface State {
  formData: ForgotPasswordFormData | undefined;
}

class ForgotPasswordComponent extends React.Component<ForgotPasswordProps, State> {

  public state: State = {
    formData: undefined,
  };

  private onFormDataChange = (formData: ForgotPasswordFormData) => {
    this.setState({ formData });
  };

  private onResetPasswordButtonPress = () => {
    this.props.onResetPress(this.state.formData);
  };

  public render(): React.ReactNode {
    const { themedStyle } = this.props;

    return (
      <ScrollableAvoidKeyboard>
        <ImageBackground
          style={themedStyle.container}
          source={imageBrandBg.imageSource}>
          <Text
            style={themedStyle.forgotPasswordLabel}
            status='control'
            category='h4'>
            Forgot Password
          </Text>
          <Text
            style={themedStyle.enterEmailLabel}
            status='control'>
            Please enter your email address
          </Text>
          <ForgotPasswordForm
            style={themedStyle.formContainer}
            onDataChange={this.onFormDataChange}
          />
          <Button
            size='giant'
            disabled={!this.state.formData}
            onPress={this.onResetPasswordButtonPress}>
            RESET PASSWORD
          </Button>
        </ImageBackground>
      </ScrollableAvoidKeyboard>
    );
  }
}

export const ForgotPassword = withStyles(ForgotPasswordComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 24,
  },
  forgotPasswordLabel: {
    alignSelf: 'center',
    marginTop: 24,
  },
  enterEmailLabel: {
    alignSelf: 'center',
    marginTop: 64,
  },
}));
