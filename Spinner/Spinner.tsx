import React, { memo } from "react";
import { combineStyle } from "../../styles/theme";
import { styles } from "./styles";

import { Props } from "./types";
function Spinner({ size = 26 }: Props) {
  const evenSize = 2 * Math.round(size / 2);

  const style = {
    "--size": `${evenSize}px`,
  } as React.CSSProperties;

  return (
    <div style={styles.container}>
      <svg style={combineStyle([styles.spinner, style])}>
        <circle
          style={styles.circle}
          cx={`${evenSize / 2}px`}
          cy={`${evenSize / 2}px`}
          r={`${evenSize / 2 - 1}px`}
        ></circle>
      </svg>
    </div>
  );
}

export default memo(Spinner);
