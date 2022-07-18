import { FC } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
// styles
import { config } from '../../../../config';
import { defaultTheme } from 'styles/default-theme';
import { paypeopleTheme } from 'styles/paypeople-theme';

const ThemeProvider: FC = ({ children }) => {
  const isDefaultTheme = config.useDefaultTheme;

  return (
    <StyledComponentsThemeProvider
      theme={isDefaultTheme ? defaultTheme : paypeopleTheme}
    >
      {children}
    </StyledComponentsThemeProvider>
  );
};

export default ThemeProvider;
