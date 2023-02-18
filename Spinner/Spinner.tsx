import React, { memo } from "react";

import { Spinner as ChakraSpinner } from "@chakra-ui/react";

import { Props } from "./types";
function Spinner({ ...props }: Props) {
  return <ChakraSpinner speed={"0.65s"} {...props} />;
}

export default memo(Spinner);
