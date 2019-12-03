import React from 'react';
import {
  Image,
  ImageSourcePropType,
  View,
  ViewProps,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  Radio,
  RadioGroup,
  RadioProps,
  Text,
} from '@kitten/ui';

interface ComponentProps {
  image: ImageSourcePropType;
  name: string;
  type: string;
  price: string;
  description: string;
  size: string;
  colors: string[];
  selectedColorIndex: number;
  onColorSelect: (index: number) => void;
}

export type ProductInfoProps = ThemedComponentProps & ViewProps & ComponentProps;

class ProductInfoComponent extends React.Component<ProductInfoProps> {

  private onColorSelectChange = (index: number) => {
    this.props.onColorSelect(index);
  };

  private renderColorRadio = (color: string, index: number): React.ReactElement<RadioProps> => {
    const { themedStyle } = this.props;

    return (
      <Radio
        key={index}
        style={themedStyle.radioItem}
        text={color}
      />
    );
  };

  public render(): React.ReactNode {
    const { style, themedStyle, selectedColorIndex, ...withDataProps } = this.props;
    const { image, name, type, price, description, size, colors, ...restProps } = withDataProps;

    return (
      <View
        {...restProps}
        style={[themedStyle.container, style]}>
        <Image
          style={[themedStyle.image, themedStyle.bottomSpace]}
          source={image}
        />
        <View style={themedStyle.detailsContainer}>
          <View style={[themedStyle.nameContainer, themedStyle.bottomSpace]}>
            <View>
              <Text
                style={themedStyle.labelBottomSpace}
                category='h6'>
                {name}
              </Text>
              <Text
                appearance='hint'
                category='p2'>
                {type}
              </Text>
            </View>
            <Text style={themedStyle.costLabel}>{price}</Text>
          </View>
          <Text
            style={themedStyle.bottomSpace}
            appearance='hint'>
            {description}
          </Text>
          <Text
            style={themedStyle.labelBottomSpace}
            category='h6'>
            Size
          </Text>
          <Text
            style={themedStyle.bottomSpace}
            appearance='hint'>
            {size}
          </Text>
          <Text
            style={themedStyle.labelBottomSpace}
            category='h6'>
            Color
          </Text>
          <RadioGroup
            style={themedStyle.colorSelector}
            selectedIndex={selectedColorIndex}
            onChange={this.onColorSelectChange}>
            {colors.map(this.renderColorRadio)}
          </RadioGroup>
        </View>
      </View>
    );
  }
}

export const ProductInfo = withStyles(ProductInfoComponent, (theme: ThemeType) => ({
  container: {},
  image: {
    flex: 1,
    width: null,
    height: 340,
  },
  detailsContainer: {
    marginHorizontal: 16,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  costLabel: {
    fontSize: 26,
    lineHeight: 32,
  },
  colorSelector: {
    flexDirection: 'row',
    marginHorizontal: 16,
  },
  radioItem: {
    marginRight: 16,
  },
  bottomSpace: {
    marginBottom: 24,
  },
  labelBottomSpace: {
    marginBottom: 8,
  },
}));
