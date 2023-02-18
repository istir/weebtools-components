import { memo } from "react";

import { Props } from "./types";
import { Flex } from "@chakra-ui/react";
import { DEFAULT_BORDER_RADIUS } from "../../styles/chakra/constants";

function ForegroundContainer({ children }: Props) {
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
}

export default memo(ForegroundContainer);
