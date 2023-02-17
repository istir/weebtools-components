import { Colors } from "../../styles/colors";
import {
  boxShadowLg,
  boxShadowMd,
  boxShadowSm,
  BoxSizing,
  createStyle,
  MIN_CLICKABLE_SIZE,
  Position,
  TRANSITION_DURATION,
  TRANSITION_TIMING,
} from "../../styles/theme";

const width = 50;
const height = MIN_CLICKABLE_SIZE * 1.2;
const margin = 2;
export const styles = createStyle({
  toggle: {
    width,
    height,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: Colors.outlineVariant,
    boxSizing: BoxSizing.contentBox,
    overflow: "hidden",
    position: Position.relative,
    transitionDuration: TRANSITION_DURATION,
    transitionTimingFunction: TRANSITION_TIMING,
    transitionProperty: "background-color",
    boxShadow: boxShadowSm,
  },
  checked: {
    backgroundColor: Colors.primary,
  },
  unchecked: {
    backgroundColor: Colors.surfaceVariant,
  },
  pill: {
    // width: 30,
    aspectRatio: 1 / 1,
    height: height - margin,
    borderRadius: 100,
    // top: 0,
    // bottom: 0,
    // marginLeft: -1,
    // border: "1px solid #f00",
    transitionDuration: TRANSITION_DURATION,
    transitionTimingFunction: TRANSITION_TIMING,
    transitionProperty: "background-color, left,right, transform",
    marginLeft: margin,
  },
  pillChecked: {
    backgroundColor: Colors.main700,
    transform: `translateX(${width - height - margin}px)`,
  },
  pillUnchecked: {
    backgroundColor: Colors.primary,
  },
});
