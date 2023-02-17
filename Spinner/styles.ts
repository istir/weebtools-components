import { Colors } from "../../styles/colors";
import { createStyle } from "../../styles/theme";

const strokeWidth = 2;
export const styles = createStyle({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  spinner: {
    width: "var(--size)",
    height: "var(--size)",
  },
  circle: {
    fill: "transparent",
    stroke: Colors.surfaceTint,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeDasharray: "calc(3.14 * var(--size))",
    transformOrigin: "calc(var(--size) / 2) calc(var(--size) / 2) 0",
    animation: "spinner 2s linear infinite",
  },
});
