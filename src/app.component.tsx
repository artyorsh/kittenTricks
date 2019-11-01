import React from 'react';
import {
  ApplicationProvider,
  IconRegistry,
} from 'react-native-ui-kitten';
import { mapping } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { DynamicStatusBar } from '@src/components/common';
import {
  ThemeContext,
  ThemeContextType,
  ThemeKey,
  themes,
  ThemeStore,
} from '@src/core/themes';
import { Router } from '@src/core/navigation/routes';

interface State {
  theme: ThemeKey;
}

export default class App extends React.Component<{}, State> {

  public state: State = {
    theme: 'Eva Light',
  };

  private onSwitchTheme = (theme: ThemeKey) => {
    ThemeStore.setTheme(theme).then(() => {
      this.setState({ theme });
    });
  };

  public render(): React.ReactNode {
    const contextValue: ThemeContextType = {
      currentTheme: this.state.theme,
      toggleTheme: this.onSwitchTheme,
    };

    return (
      <React.Fragment>
        <IconRegistry icons={EvaIconsPack}/>
        <ThemeContext.Provider value={contextValue}>
          <ApplicationProvider
            mapping={mapping}
            theme={themes[this.state.theme]}>
            <DynamicStatusBar currentTheme={this.state.theme}/>
            <Router/>
          </ApplicationProvider>
        </ThemeContext.Provider>
      </React.Fragment>
    );
  }
}
