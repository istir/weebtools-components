import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import React, { ButtonHTMLAttributes } from "react";

export type Props = {
  buttonStyle?: React.CSSProperties;
  children?: JSX.Element;
  buttonType?: "plain" | "gray" | "tinted" | "filled";
  buttonState?: "active" | "inactive";
  size: "small" | "medium" | "large";
  href?: string;
  label?: string;
  download?: string;
  icon?: IconDefinition;
  badge?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;
