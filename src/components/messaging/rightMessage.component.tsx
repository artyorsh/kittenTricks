import React from 'react';
import {
  Dimensions,
  View,
  ViewProps,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@ui-kitten/components';
import { Text } from '@ui-kitten/components';
import { Message } from '@src/core/model';
import { MessageContent } from './messageContent.component';

interface ComponentProps {
  message: Message;
  children?: React.ReactNode;
}

export type RigheMessageProps = ThemedComponentProps & ViewProps & ComponentProps;

class RigheMessageComponent extends React.Component<RigheMessageProps> {

  public render(): React.ReactNode {
    const { themedStyle, message, children } = this.props;

    return [
      <Text
        key={0}
        appearance='hint'
        category='c1'>{message.date}
      </Text>,
      <View style={themedStyle.cloudContainer} key={1}>
        <View style={[themedStyle.cloud, themedStyle.cloudRight]}>
          <MessageContent message={message}>
            {children}
          </MessageContent>
        </View>
        <View style={[themedStyle.triangle, themedStyle.triangleRight]}/>
      </View>,
    ];
  }
}

export const RightMessage = withStyles(RigheMessageComponent, (theme: ThemeType) => ({
  triangle: {
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    backgroundColor: 'transparent',
  },
  triangleRight: {
    transform: [{ rotate: '90deg' }],
    borderBottomColor: theme['color-primary-default'],
  },
  cloudContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cloud: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 52,
    borderRadius: 4,
    padding: 4,
    maxWidth: Dimensions.get('window').width - 120,
  },
  cloudRight: {
    left: 4,
    backgroundColor: theme['color-primary-default'],
    marginLeft: 16,
  },
}));
