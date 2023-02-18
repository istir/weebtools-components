import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo, useEffect, useState } from "react";
import { Props } from "./types";
import { Checkbox as ChakraCheckbox } from "@chakra-ui/react";
function Checkbox({
  defaultState = false,
  onChecked = () => {},
  onUnchecked = () => {},
  containerStyle,
  pillStyle,
  state,
  label,
  notClickable,
}: Props) {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked) {
      onChecked();
    } else {
      onUnchecked();
    }
  };
  return (
    <ChakraCheckbox
      colorScheme="main"
      size="lg"
      onChange={onChangeHandler}
      disabled={notClickable}
      defaultChecked={defaultState}
    />
  );
}

export default memo(Checkbox);
