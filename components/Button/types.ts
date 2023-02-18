import { ButtonProps } from "@chakra-ui/react";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export type Props = {
  badge?: string;
  buttonState?: "active" | "inactive";
  variant?: ButtonProps["variant"];
  stretch?: boolean;
  children?: JSX.Element | string;
  containerStyle?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
  download?: string;
  href?: string;
  icon?: IconDefinition;
  label?: string;
  rightIcon?: IconDefinition;
  rightIconRotated?: boolean;
  size?: "small" | "medium" | "large";
} & ButtonProps;
