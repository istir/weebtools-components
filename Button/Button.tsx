import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { forwardRef, memo } from "react";

import { Box, Button as ChakraButton, Flex, Text } from "@chakra-ui/react";
import { Props } from "./types";

const Button = forwardRef(
  (
    {
      children,
      variant = "plain",
      size = "medium",
      label,
      icon,
      badge,
      rightIcon,
      stretch = false,
      as = "button",
      ...props
    }: Props,
    _ref
  ) => {
    function getButtonSize() {
      switch (size) {
        case "small":
          return "sm";
        case "medium":
          return "md";
        case "large":
          return "lg";
        default:
          return size;
      }
    }

    function getIconSize() {
      switch (size) {
        case "small":
          return "1x";
        case "medium":
          return "xl";
        case "large":
          return "2x";
        default:
          return "1x";
      }
    }

    function renderIcon() {
      if (!icon) return null;
      return <FontAwesomeIcon icon={icon} size={getIconSize()} />;
    }

    function renderLabel() {
      if (!label) return null;
      return <Text marginTop={2}>{label}</Text>;
    }
    return (
      <Flex>
        <ChakraButton
          className="button"
          variant={variant}
          size={getButtonSize()}
          width={"full"}
          height={label && "12"}
          justifyContent={"center"}
          alignItems="center"
          flexDir={"column"}
          {...props}
        >
          <Flex
            justifyContent={icon && children ? "space-between" : "center"}
            width="full"
            gap={2}
            alignItems="center"
          >
            {renderIcon()}
            {children}
          </Flex>
          {renderLabel()}
        </ChakraButton>
      </Flex>
    );
  }
);

export default Button;
