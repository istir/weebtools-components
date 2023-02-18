import { memo } from "react";
import { Props } from "./types";
import { Checkbox as ChakraCheckbox, Flex, Text } from "@chakra-ui/react";
import { DEFAULT_BORDER_RADIUS } from "../../styles/chakra/constants";
function Checkbox({
  defaultState = false,
  onChecked = () => {},
  onUnchecked = () => {},
  label,
  notClickable,
  backgroundColor = "sub-opacity.200",
}: Props) {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked) {
      onChecked();
    } else {
      onUnchecked();
    }
  };
  return (
    <Flex
      gap={2}
      bg={backgroundColor}
      borderRadius={DEFAULT_BORDER_RADIUS}
      padding={0.5}
    >
      <ChakraCheckbox
        colorScheme="main"
        size="lg"
        onChange={onChangeHandler}
        disabled={notClickable}
        defaultChecked={defaultState}
      />
      <Text>{label}</Text>
    </Flex>
  );
}

export default memo(Checkbox);
