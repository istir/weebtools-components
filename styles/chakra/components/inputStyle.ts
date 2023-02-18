import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { inputAnatomy } from "@chakra-ui/anatomy";
import { DEFAULT_BORDER_RADIUS } from "../constants";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = definePartsStyle({});

const variants = {
  filled: definePartsStyle({
    field: {
      bg: "sub-opacity.800",
      borderRadius: DEFAULT_BORDER_RADIUS,
      backdropBlur: 10,
      _hover: {
        bg: "sub.650",
      },
      _focus: {
        bg: "main-opacity.300",
        borderColor: "main-opacity.400",
      },
    },
  }),
};

export const inputTheme = defineMultiStyleConfig({
  baseStyle,
  variants,
});
