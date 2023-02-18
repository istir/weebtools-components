import { extendTheme } from "@chakra-ui/react";
import { switchTheme } from "./components/switchStyle";
import { inputTheme } from "./components/inputStyle";
import { buttonTheme } from "./components/buttonStyle";
import { colors } from "./colors";
import { spinnerTheme } from "./components/spinnerStyle";
import { checkboxTheme } from "./components/checkboxStyle";

export const theme = extendTheme({
  useSystemColorMode: true,
  colors: colors,
  styles: {
    global: {
      body: {
        bg: "var(--app-background)",
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
