import 'styled-components';
import {theme} from '@/modules/core/containers/GlobalThemeProvider';

declare module 'styled-components' {
  type Theme = typeof theme;
  export interface DefaultTheme extends Theme {}
}
