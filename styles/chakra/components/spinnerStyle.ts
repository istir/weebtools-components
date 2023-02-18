import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

export const spinnerTheme = defineStyleConfig({
  variants: {
    weeb: {
      color: "main.100",
    },
  },
  defaultProps: {
    variant: "weeb",
  },
});
