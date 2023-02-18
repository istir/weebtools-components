import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { StyleFunctionProps } from "@chakra-ui/styled-system";
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
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: props.colorMode === "dark" ? "sub.100" : "sub.50",
        transitionProperty: "all",
        transitionDuration: "normal",
      },
    }),
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
