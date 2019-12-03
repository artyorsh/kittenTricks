import React from 'react';
import {
  ImageProps,
  TouchableOpacity,
  View,
  ViewProps,
} from 'react-native';
import {
  StyleType,
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Text } from '@kitten/ui';
import { PaymentCard as PaymentCardModel } from '@src/core/model';
import { MoreVerticalIconFill } from '@src/assets/icons';

interface ComponentProps {
  paymentCard: PaymentCardModel;
  index?: number;
  onDetails: (index: number) => void;
}

export type PaymentCardProps = ThemedComponentProps & ComponentProps & ViewProps;

class PaymentCardComponent extends React.Component<PaymentCardProps> {

  private onDetails = (): void => {
    this.props.onDetails(this.props.index);
  };

  private renderDetailsIcon = (): React.ReactElement<ImageProps> => {
    return MoreVerticalIconFill(this.props.themedStyle.moreIcon);
  };

  public render(): React.ReactNode {
    const { themedStyle, style, paymentCard } = this.props;
    const detailsHitSlop: StyleType = {
      top: 20,
      bottom: 20,
      left: 20,
      right: 20,
    };

    return (
      <View style={[themedStyle.container, style]}>
        <View style={[themedStyle.topBottomContainer, themedStyle.topContainer]}>
          <Text
            status='control'
            category='h4'>
            {paymentCard.type}
          </Text>
          <TouchableOpacity
            hitSlop={detailsHitSlop}
            activeOpacity={0.95}
            onPress={this.onDetails}>
            {this.renderDetailsIcon()}
          </TouchableOpacity>
        </View>
        <Text
          status='control'
          category='s1'>
          {paymentCard.number}
        </Text>
        <View style={themedStyle.topBottomContainer}>
          <View style={themedStyle.bottomLeftContainer}>
            <Text
              status='control'
              category='c1'>
              Cardholder Name
            </Text>
            <Text
              status='control'
              category='s1'>
              {paymentCard.cardHolder}
            </Text>
          </View>
          <View style={themedStyle.bottomRightContainer}>
            <Text
              style={themedStyle.rightLabel}
              status='control'
              category='c1'>
              Expire Date
            </Text>
            <Text
              style={themedStyle.rightLabel}
              status='control'>
              {paymentCard.expireDate}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export const PaymentCard = withStyles(PaymentCardComponent, (theme: ThemeType) => ({
  container: {
    borderRadius: 12,
    padding: 24,
    backgroundColor: theme['color-primary-default'],
  },
  topContainer: {
    marginBottom: 32,
  },
  topBottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  numberLabel: {
    marginBottom: 26,
    fontSize: 18,
  },
  bottomLeftContainer: {
    justifyContent: 'flex-start',
  },
  bottomRightContainer: {
    justifyContent: 'flex-end',
  },
  moreIcon: {
    width: 4,
    height: 18,
    tintColor: 'white',
  },
  rightLabel: {
    textAlign: 'right',
  },
}));
