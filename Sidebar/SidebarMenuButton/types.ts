import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export type Props = {
  children: JSX.Element | JSX.Element[];
  label: string;
  icon?: IconDefinition;
  collapsed?: boolean;
  onClick?: VoidFunction;
};
