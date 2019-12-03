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
} from '@kitten/theme';
import { Text } from '@kitten/ui';
import { Message } from '@src/core/model';
import { MessageContent } from './messageContent.component';

interface ComponentProps {
  message: Message;
  children?: React.ReactNode;
}

export type LeftMessageProps = ThemedComponentProps & ViewProps & ComponentProps;

class LeftMessageComponent extends React.Component<LeftMessageProps> {

  public render(): React.ReactNode {
    const { themedStyle, message, children } = this.props;

    return [
      <View style={themedStyle.cloudContainer} key={0}>
        <View style={[themedStyle.triangle, themedStyle.triangleLeft]}/>
        <View style={[themedStyle.cloud, themedStyle.cloudLeft]}>
          <MessageContent message={message}>
            {children}
          </MessageContent>
        </View>
      </View>,
      <Text
        key={1}
        style={themedStyle.dateLabel}
        appearance='hint'
        category='c1'>
        {message.date}
      </Text>,
    ];
  }
}

export const LeftMessage = withStyles(LeftMessageComponent, (theme: ThemeType) => ({
  triangle: {
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    backgroundColor: 'transparent',
  },
  triangleLeft: {
    transform: [{ rotate: '-90deg' }],
    borderBottomColor: theme['background-basic-color-1'],
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
  cloudLeft: {
    left: -4,
    backgroundColor: theme['background-basic-color-1'],
    marginRight: 16,
  },
}));
