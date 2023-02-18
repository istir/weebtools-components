import { ButtonProps } from "@chakra-ui/react";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export type Props = {
  icon?: IconDefinition;
  label: string;
  onClick?: () => void;
  variant?: ButtonProps["variant"];
};
