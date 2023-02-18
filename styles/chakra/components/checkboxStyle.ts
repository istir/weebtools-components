import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { checkboxAnatomy } from "@chakra-ui/anatomy";
import { DEFAULT_BORDER_RADIUS } from "../constants";
import { createStyle } from "../../theme";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const baseStyle = definePartsStyle({
  control: {
    borderRadius: DEFAULT_BORDER_RADIUS,
    borderColor: "main.500",
  },
});

export const checkboxTheme = defineMultiStyleConfig({
  baseStyle,
});
