import React from 'react';
import { ImageRequireSource } from 'react-native';
import {
  dark,
  mapping,
} from '@eva-design/eva';
import { ApplicationProvider } from '@kitten/theme';
import {
  ApplicationLoader,
  Assets,
} from './core/appLoader/applicationLoader.component';
import { Router } from './core/navigation/routes';
import { trackScreenTransition } from './core/utils/analytics';
import {
  getCurrentStateName,
  RouteState,
} from './core/navigation/util';
import { IconRegistry } from '@kitten/ui';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { default as appTheme } from './core/themes/appTheme.json';

const images: ImageRequireSource[] = [
  require('./assets/images/source/image-profile-1.jpg'),
  require('./assets/images/source/image-profile-2.jpg'),
  require('./assets/images/source/image-profile-3.jpg'),
  require('./assets/images/source/image-profile-4.jpg'),
  require('./assets/images/source/image-profile-5.jpg'),
  require('./assets/images/source/image-profile-6.jpg'),
  require('./assets/images/source/image-profile-7.jpg'),
  require('./assets/images/source/image-profile-8.jpg'),
  require('./assets/images/source/image-profile-9.jpg'),
  require('./assets/images/source/image-profile-10.jpg'),
];

const fonts: { [key: string]: number } = {
  'opensans-semibold': require('./assets/fonts/opensans-semibold.ttf'),
  'opensans-bold': require('./assets/fonts/opensans-bold.ttf'),
  'opensans-extrabold': require('./assets/fonts/opensans-extra-bold.ttf'),
  'opensans-light': require('./assets/fonts/opensans-light.ttf'),
  'opensans-regular': require('./assets/fonts/opensans-regular.ttf'),
};

const assets: Assets = {
  images: images,
  fonts: fonts,
};

export default class App extends React.Component {

  private onTransitionTrackError = (error: any): void => {
    console.warn('Analytics error: ', error.message);
  };

  private onNavigationStateChange = (prevState: RouteState, currentState: RouteState) => {
    const prevStateName: string = getCurrentStateName(prevState);
    const currentStateName: string = getCurrentStateName(currentState);

    if (prevStateName !== currentStateName) {
      trackScreenTransition(currentStateName)
        .catch(this.onTransitionTrackError);
    }
  };

  public render(): React.ReactNode {
    return (
      <ApplicationLoader assets={assets}>
        <IconRegistry icons={EvaIconsPack}/>
        <ApplicationProvider
          mapping={mapping}
          theme={{ ...dark, ...appTheme }}
          customMapping={{ strict: { 'text-font-family': 'opensans-semibold' } }}>
          <Router onNavigationStateChange={this.onNavigationStateChange}/>
        </ApplicationProvider>
      </ApplicationLoader>
    );
  }
}
