import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { switchAnatomy } from "@chakra-ui/anatomy";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {},
  thumb: {
    bg: "main.900",
    boxShadow: "md",
  },
  track: {
    bg: "main.400",
    _checked: {
      bg: "main.100",
    },
  },
});

export const switchTheme = defineMultiStyleConfig({
  baseStyle,
  defaultProps: { size: "lg" },
});
