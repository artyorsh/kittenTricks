import React from 'react';
import {
  ListItem,
  ListItemProps,
  Text,
} from '@kitten/ui';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { LayoutListItemData } from './type';

interface ComponentProps {
  data: LayoutListItemData;
}

export type LayoutListItemProps = ThemedComponentProps & ComponentProps & ListItemProps;

class LayoutListItemComponent extends React.Component<LayoutListItemProps> {

  public render(): React.ReactNode {
    const { style, themedStyle, data, ...restProps } = this.props;

    return (
      <ListItem
        {...restProps}
        style={[themedStyle.container, style]}>
        <Text
          category='s1'>
          {data.title}
        </Text>
        <Text
          appearance='hint'>
          {data.description}
        </Text>
      </ListItem>
    );
  }
}

export const LayoutListItem = withStyles(LayoutListItemComponent, (theme: ThemeType) => ({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 8,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  description: {
    marginTop: 4,
  },
}));
