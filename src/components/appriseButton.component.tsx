import React from 'react';
import {
  GestureResponderEvent,
  ImageStyle,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {
  Interaction,
  styled,
  StyledComponentProps,
  StyleType,
} from '@kitten/theme';
import { IconElement } from '@kitten/ui';

interface AppriseButtonProps extends StyledComponentProps, TouchableOpacityProps {
  status?: string;
  size?: string;
  icon?: (style: StyleType) => IconElement;
}

/**
 * @property {string} appearance.
 * Can be `filled`, `outline` or `ghost`.
 * Default is `filled`.
 *
 * @property {string} status - status of the component. Works like other UI Kitten components.
 * Can be `primary`, `success`, `info`, `warning`, `danger`, `basic` or `control`.
 * Default is `primary`.
 *
 * @property {string} size.
 * Can be `tiny`, `small`, `medium`, `large` or `giant`.
 * Default is `medium`.
 *
 * @property {(style) => ReactElement} icon. Functional component to render an icon.
 */
class AppriseButtonComponent extends React.Component<AppriseButtonProps> {

  static styledComponentName: string = 'AppriseButton';

  private onPress = (event: GestureResponderEvent): void => {
    if (this.props.onPress) {
      this.props.onPress(event);
    }
  };

  private onPressIn = (event: GestureResponderEvent): void => {
    this.props.dispatch([Interaction.ACTIVE]);

    if (this.props.onPressIn) {
      this.props.onPressIn(event);
    }
  };

  private onPressOut = (event: GestureResponderEvent): void => {
    this.props.dispatch([]);

    if (this.props.onPressOut) {
      this.props.onPressOut(event);
    }
  };

  private getComponentStyle = (source: StyleType): StyleType => {
    const {
      iconWidth,
      iconHeight,
      iconTintColor,
      iconMarginHorizontal,
      ...containerParameters
    } = source;

    return {
      container: containerParameters,
      icon: {
        width: iconWidth,
        height: iconHeight,
        tintColor: iconTintColor,
        marginHorizontal: iconMarginHorizontal,
      },
    };
  };

  private renderIconElement = (style: ImageStyle): IconElement => {
    const iconElement: IconElement = this.props.icon(style);

    return React.cloneElement(iconElement, {
      style: [style, iconElement.props.style],
    });
  };

  public render(): React.ReactElement<TouchableOpacityProps> {
    const { themedStyle, style, ...containerProps } = this.props;
    const { container, ...childStyles } = this.getComponentStyle(themedStyle);

    return (
      <TouchableOpacity
        activeOpacity={1.0}
        {...containerProps}
        style={[container, styles.container, style]}
        onPress={this.onPress}
        onPressIn={this.onPressIn}
        onPressOut={this.onPressOut}>
        {this.renderIconElement(childStyles.icon)}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const AppriseButton = styled<AppriseButtonProps>(AppriseButtonComponent);

