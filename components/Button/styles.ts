import { Colors } from "../../styles/colors";
import {
  createStyle,
  DEFAULT_BORDER_RADIUS,
  FlexDirection,
  MIN_CLICKABLE_SIZE,
  Position,
  TRANSITION_DURATION,
  TRANSITION_TIMING,
} from "../../styles/theme";

export const styles = createStyle({
  container: {
    display: "flex",
    width: "fit-content",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: FlexDirection.column,
    position: Position.relative,
  },

  button: {
    minWidth: MIN_CLICKABLE_SIZE,
    minHeight: MIN_CLICKABLE_SIZE,
    borderRadius: DEFAULT_BORDER_RADIUS,
    border: 0,
    color: Colors.primaryText,
    paddingLeft: 10,
    paddingRight: 10,
    transitionDuration: TRANSITION_DURATION,
    transitionProperty: "background-color, color, filter, box-shadow",
    transitionTimingFunction: TRANSITION_TIMING,
  },
  square: {
    aspectRatio: 1 / 1,
    padding: 5,
  },
  // types
  plain: {
    backgroundColor: "transparent",
    color: Colors.primary,
  },
  gray: {
    backgroundColor: Colors.inverseOnSurface,
    color: Colors.primary,
  },
  tinted: {
    backgroundColor: Colors.surfaceVariant,
    color: Colors.surfaceText,
  },
  filled: {
    color: Colors.primaryContainerText,
    backgroundColor: Colors.primaryContainer,
  },
  active: {},
  inactive: {},
  //sizes
  small: {
    minHeight: MIN_CLICKABLE_SIZE,
  },
  medium: { minHeight: MIN_CLICKABLE_SIZE * 1.5 },
  large: { minHeight: MIN_CLICKABLE_SIZE * 2 },
  //label
  label: {
    marginTop: 2,
    fontSize: "small",
    color: Colors.primary,
  },
  contentContainer: {
    display: "flex",
    gap: 5,
    justifyContent: "center",
  },
  badge: {
    position: Position.absolute,
    zIndex: 2,
    top: -5,
    right: -3,
    backgroundColor: Colors.errorContainer,
    borderRadius: 100,
    aspectRatio: "1 / 1",
    padding: "0 5px",
    fontSize: "x-small",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
