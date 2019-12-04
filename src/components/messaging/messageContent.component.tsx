import React from 'react';
import { ViewProps } from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@ui-kitten/components';
import { Text } from '@ui-kitten/components';
import { Message } from '@src/core/model';

interface ComponentProps {
  message: Message;
  children?: React.ReactNode;
}

export type MessageContentProps = ThemedComponentProps & ViewProps & ComponentProps;

class MessageContentComponent extends React.Component<MessageContentProps> {

  public render(): React.ReactNode {
    const { themedStyle, message, children } = this.props;

    if (message.text) {
      return (
        <Text
          style={themedStyle.text}
          status='control'>
          {message.text}
        </Text>
      );
    } else if (children) {
      return children;
    } else {
      return null;
    }

  }
}

export const MessageContent = withStyles(MessageContentComponent, (theme: ThemeType) => ({
  text: {
    margin: 16,
  },
}));
