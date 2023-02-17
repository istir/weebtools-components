import { memo } from "react";

import { combineStyle } from "../../styles/theme";
import { Props } from "./types";
function Text({ style, children, ...props }: Props) {
  return (
    <p style={style} {...props}>
      {children}
    </p>
  );
}

export default memo(Text);
