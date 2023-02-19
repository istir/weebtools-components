import { extendTheme } from '@chakra-ui/react';

import { colors } from './colors';
import { buttonTheme } from './components/buttonStyle';
import { checkboxTheme } from './components/checkboxStyle';
import { inputTheme } from './components/inputStyle';
import { spinnerTheme } from './components/spinnerStyle';
import { switchTheme } from './components/switchStyle';

export const theme = extendTheme({
  useSystemColorMode: true,
  colors: colors,
  styles: {
    global: {
      body: {
        bg: 'var(--app-background)',
      },
    },
    config: {
      disableTransitionOnChange: false,
    },
  },
  components: {
    Button: buttonTheme,
    Switch: switchTheme,
    Input: inputTheme,
    Spinner: spinnerTheme,
    Checkbox: checkboxTheme,
  },
});
