import React from 'react';
import {
  Image,
  View,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@ui-kitten/components';
import {
  ListItem,
  ListItemProps,
  Text,
} from '@ui-kitten/components';
import { LayoutGridListItemData } from './type';

interface ComponentProps {
  data: LayoutGridListItemData;
}

export type LayoutGridListItemProps = ThemedComponentProps & ListItemProps & ComponentProps;

class LayoutGridListItemComponent extends React.Component<LayoutGridListItemProps> {

  public render(): React.ReactNode {
    const { themedStyle, style, data, ...restProps } = this.props;

    return (
      <ListItem
        style={[themedStyle.container, style]}
        {...restProps}>
        <View style={themedStyle.detailsContainer}>
          <Text
            category='s1'>
            {data.title}
          </Text>
          <Text
            appearance='hint'
            category='p2'>
            {data.description}
          </Text>
        </View>
        <Image
          style={themedStyle.image}
          source={data.image}
        />
      </ListItem>
    );
  }
}

export const LayoutGridListItem = withStyles(LayoutGridListItemComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'column',
    borderRadius: 12,
    paddingHorizontal: 0,
    paddingVertical: 0,
    overflow: 'hidden',
  },
  detailsContainer: {
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  image: {
    flex: 1,
    height: 276,
    resizeMode: 'contain',
  },
}));
