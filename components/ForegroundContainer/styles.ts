import { Colors } from "../../styles/colors";
import {
  DEFAULT_BORDER_RADIUS,
  FlexDirection,
  MIN_CLICKABLE_SIZE,
  Styles,
  TRANSITION_DURATION,
  TRANSITION_TIMING,
} from "../../styles/theme";

const styles: Styles = {
  container: {
    "--focus-background-color": Colors.surfaceTint,
    "--focus-color": Colors.surface,
    overflow: "hidden",
    // padding: "0px 5px",
    borderRadius: DEFAULT_BORDER_RADIUS,
    backgroundColor: Colors.surfaceVariant,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: FlexDirection.column,

    // borderBottom:
  },
  foreground: {
    minHeight: MIN_CLICKABLE_SIZE * 1.6,
    transitionDuration: TRANSITION_DURATION,
    transitionTimingFunction: TRANSITION_TIMING,
    transitionProperty: "background-color, color",
    padding: "0px 5px",
    // borderWidth: 0,
  },
};

export default styles;
