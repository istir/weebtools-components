import { CSSProperties } from "react";

export const EMPTY_STYLE = {};

const MIN_CLICKABLE_SIZE_RETINA = 44;

// export const MIN_CLICKABLE_SIZE = isRetinaDisplay()
//   ? MIN_CLICKABLE_SIZE_RETINA / 2
//   : MIN_CLICKABLE_SIZE_RETINA;
export const MIN_CLICKABLE_SIZE = MIN_CLICKABLE_SIZE_RETINA / 2;

export const DEFAULT_BORDER_RADIUS = 10;

export const TRANSITION_DURATION = "0.3s";

export const TRANSITION_TIMING = "cubic-bezier(0.645, 0.045, 0.355, 1.000)";

export const boxShadowSm =
  "0px 2px 2px 0pxrgba(10,10,10, 0.14), 0px 3px 1px -2pxrgba(10,10,10, 0.12), 0px 1px 5px 0pxrgba(10,10,10, 0.2)";
export const boxShadowMd =
  "0px 2px 5px 0px rgba(10,10,10, 0.14), 0px 1px 10px 0px rgba(10,10,10, 0.12), 0px 2px 4px -1px rgba(10,10,10, 0.2)";
export const boxShadowLg =
  "0px 8px 17px 2px rgba(10,10,10, 0.14), 0px 3px 14px 2px rgba(10,10,10, 0.12), 0px 5px 5px -3px rgba(10,10,10, 0.2)";

export const FlexDirection = {
  column: "column" as "column",
  row: "row" as "row",
};
export const FlexWrap = {
  wrap: "wrap" as "wrap",
  noWrap: "noWrap" as "noWrap",
};
export const TextAlign = {
  left: "left" as "left",
  right: "right" as "right",
  center:"center" as "center"
}

export const Position = {
  absolute: "absolute" as "absolute",
  relative: "relative" as "relative",
  static: "static" as "static",
  sticky: "sticky" as "sticky",
  fixed: "fixed" as "fixed",
  inherit: "inherit" as "inherit",
};

export const BoxSizing = {
  contentBox: "content-box" as "content-box",
  borderBox: "border-box" as "border-box",
};

export function isRetinaDisplay() {
  if (window.matchMedia) {
    var mq = window.matchMedia(
      "only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)"
    );
    return (mq && mq.matches) || window.devicePixelRatio > 1;
  }
}

type CssVariables = {
  [key: string]: string;
};

export type Styles = Record<
  string,
  React.CSSProperties & { vars?: CssVariables }
>;

//https://stackoverflow.com/questions/69783310/type-is-assignable-to-the-constraint-of-type-t-but-t-could-be-instantiated
export function createStyle<T = Styles>(style: T): T {
  //@ts-ignore
  return Object.fromEntries(
    //@ts-ignore
    Object.entries(style).map(([key, value]) => [
      key,
      //@ts-ignore
      { ...value, ...value?.vars, vars: undefined },
    ])
  );
}
export function combineStyle(
  style: CSSProperties | CSSProperties[]
): CSSProperties {
  const styles = (Array.isArray(style) ? style : [style]) as CSSProperties[];
  return Object.assign({}, ...styles);
}
