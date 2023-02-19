import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export type Props = {
  buttons: SidebarButtons;
  footer?: JSX.Element;
};

export type SidebarMainButtonType = {
  children?: SidebarSubMenuButtonType[];
} & SidebarSubMenuButtonType;

export type SidebarSubMenuButtonType = {
  name: string;
  icon?: IconDefinition;
  onClick?: VoidFunction;
};

export type SidebarButtons = SidebarMainButtonType[];
