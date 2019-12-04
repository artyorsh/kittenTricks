import { ThemeType } from '@ui-kitten/components';
import { ThemeKey } from '@src/core/themes';

export interface Theme {
  name: ThemeKey;
  theme: ThemeType;
}
