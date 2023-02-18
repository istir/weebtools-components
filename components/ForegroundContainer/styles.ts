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
    backgroundColor: Colors.surfaceVariant2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: FlexDirection.column,
    margin: 5,
    // borderBottom:
  },
  row: { flexDirection: FlexDirection.row },
  column: {
    flexDirection: FlexDirection.column,
  },
  foreground: {
    minHeight: MIN_CLICKABLE_SIZE * 1.6,
    transitionDuration: TRANSITION_DURATION,
    transitionTimingFunction: TRANSITION_TIMING,
    transitionProperty: "background-color, color",
    padding: "0px 5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 0,
  },
};

export default styles;
