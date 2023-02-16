import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import React, { ButtonHTMLAttributes } from "react";

export type Props = {
  badge?: string;
  buttonState?: "active" | "inactive";
  buttonType?: "plain" | "gray" | "tinted" | "filled";
  stretch?: boolean;
  children?: JSX.Element;
  containerStyle?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
  download?: string;
  href?: string;
  icon?: IconDefinition;
  label?: string;
  rightIcon?: IconDefinition;
  rightIconRotated?: boolean;
  size?: "small" | "medium" | "large";
} & ButtonHTMLAttributes<HTMLButtonElement>;
