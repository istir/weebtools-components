import { memo } from "react";

import styles from "./styles";
import { combineStyle, EMPTY_STYLE } from "../../styles/theme";
import { Props } from "./types";
import { Flex } from "@chakra-ui/react";
import { DEFAULT_BORDER_RADIUS } from "../../styles/chakra/constants";

function ForegroundContainer({
  children,
  style = EMPTY_STYLE,
  innerStyle = EMPTY_STYLE,
  row = false,
  separator = true,
}: Props) {
  return (
    <Flex
      flexDir={"column"}
      backgroundColor={"sub.150"}
      borderRadius={DEFAULT_BORDER_RADIUS}
      boxShadow="md"
      gap={2}
      marginBottom={2}
      marginX={1}
    >
      {children}
    </Flex>
  );
  // const childrenToRender = Array.isArray(children) ? children : [children];
  // return (
  //   <div
  //     className={`foreground-container ${row ? "row" : ""} ${
  //       separator ? "separator" : "no-separator"
  //     }`}
  //     style={combineStyle([
  //       styles.container,
  //       row ? styles.row : styles.column,
  //       style,
  //     ])}
  //   >
  //     {childrenToRender.map((child, i) => (
  //       <div
  //         key={i}
  //         className="foreground"
  //         style={combineStyle([styles.foreground, innerStyle])}
  //       >
  //         {child}
  //       </div>
  //     ))}
  //   </div>
  // );
}

export default memo(ForegroundContainer);
