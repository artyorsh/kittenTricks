import React from 'react';
import { Alert } from 'react-native';
import {
  TopNavigation,
  TopNavigationProps,
  TopNavigationAction,
  TopNavigationActionProps,
} from '@ui-kitten/components';
import {
  StarIconFill,
  ArrowBackFill,
  MoreVerticalIconFill,
} from '@src/assets/icons';

type TopNavigationElement = React.ReactElement<TopNavigationProps>;
type TopNavigationActionElement = React.ReactElement<TopNavigationActionProps>;

export const CenterTopNavigation = (props?: TopNavigationProps): TopNavigationElement => {
  return (
    <TopNavigation
      {...props}
      alignment='center'
      title='Title'
      subtitle='Subtitle'
      leftControl={renderLeftControl()}
      rightControls={renderRightControls()}
    />
  );
};

const renderLeftControl = (): TopNavigationActionElement => {
  return (
    <TopNavigationAction icon={ArrowBackFill} />
  );
};

const renderRightControls = (): TopNavigationActionElement[] => {
  return ([
    <TopNavigationAction icon={StarIconFill}/>,
    <TopNavigationAction icon={MoreVerticalIconFill}/>,
  ]);
};
