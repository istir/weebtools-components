import { createStyle } from "../../theme";

const BASE_BUTTON_STYLES = {
  color: "main.100",
  borderRadius: 10,
};
const BASE_BUTTON_HOVER_STYLES = {
  color: "main.50",
};
const BASE_BUTTON_ACTIVE_STYLES = {
  filter: "saturate(1.25)",
  transform: "scale(0.95)",
};
export const buttonTheme = createStyle({
  variants: {
    plain: {
      ...BASE_BUTTON_STYLES,
      "@media(hover: hover)": {
        _hover: {
          ...BASE_BUTTON_HOVER_STYLES,
        },
      },
      _active: BASE_BUTTON_ACTIVE_STYLES,
    },
    gray: {
      ...BASE_BUTTON_STYLES,
      backgroundColor: "sub.150",
      "@media(hover: hover)": {
        _hover: {
          ...BASE_BUTTON_HOVER_STYLES,
          backgroundColor: "sub.250",
        },
      },
      _active: BASE_BUTTON_ACTIVE_STYLES,
    },
    tinted: {
      ...BASE_BUTTON_STYLES,
      backgroundColor: "mixed.950",
      "@media(hover: hover)": {
        _hover: {
          ...BASE_BUTTON_HOVER_STYLES,
          backgroundColor: "mixed.850",
        },
      },
      _active: BASE_BUTTON_ACTIVE_STYLES,
    },
    filled: {
      ...BASE_BUTTON_STYLES,
      bg: "main.950",
      "@media(hover: hover)": {
        _hover: {
          ...BASE_BUTTON_HOVER_STYLES,
          bg: "main.850",
        },
      },
      _active: BASE_BUTTON_ACTIVE_STYLES,
    },
  },
});
