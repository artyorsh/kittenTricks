import React from 'react';
import {
  withStyles,
  ThemeType,
  ThemedComponentProps,
} from '@ui-kitten/components';
import { LayoutMenu } from '@src/components/common';
import { AuthData } from './type';

interface ComponentProps {
  data: AuthData[];
  selectedLayoutIndex: number;
  onItemSelect: (index: number) => void;
  onLayoutSelect: (index: number) => void;
}

export type AuthProps = ThemedComponentProps &  ComponentProps;

class AppriseComponent extends React.Component<AuthProps> {

  private onCategorySelect = (index: number) => {
    this.props.onLayoutSelect(index);
  };

  private onItemPress = (index: number) => {
    this.props.onItemSelect(index);
  };

  public render(): React.ReactNode {
    const { themedStyle, data, selectedLayoutIndex } = this.props;

    return (
      <LayoutMenu
        style={themedStyle.container}
        data={data}
        selectedIndex={selectedLayoutIndex}
        onSelect={this.onCategorySelect}
        onItemPress={this.onItemPress}
      />
    );
  }
}

export const Apprise = withStyles(AppriseComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['background-basic-color-2'],
  },
}));
