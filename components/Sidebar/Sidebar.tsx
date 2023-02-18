import { memo } from "react";

import {
  Props,
  SidebarMainButtonType,
  SidebarSubMenuButtonType,
} from "./types";
import { Sidebar as RPSidebar, Menu, useProSidebar } from "react-pro-sidebar";
import Button from "../Button/Button";
import {
  faBars,
  faBarsStaggered,
  faTablet,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import ForegroundContainer from "../ForegroundContainer/ForegroundContainer";
import SidebarMenuButton from "./SidebarMenuButton/SidebarMenuButton";
import SidebarSubMenuButton from "./SidebarSubMenuButton/SidebarSubMenuButton";
import { Box, Flex } from "@chakra-ui/react";
function Sidebar({ buttons }: Props) {
  const { toggled, collapsed, collapseSidebar } = useProSidebar();
  const onSidebarToggleButtonClick = () => {
    collapseSidebar();
  };

  function renderMenuButton({
    children,
    name,
    icon,
    onClick,
  }: SidebarMainButtonType) {
    if (!children?.length)
      return (
        <SidebarSubMenuButton
          label={name}
          icon={icon}
          onClick={onClick}
          variant="filled"
        />
      );
    return (
      <ForegroundContainer>
        <SidebarMenuButton
          label={name}
          icon={icon}
          collapsed={collapsed}
          onClick={onClick}
        >
          {children?.map((child, index) => (
            <SidebarSubMenuButton
              label={child.name}
              icon={child.icon}
              onClick={child.onClick}
              key={index}
            />
          ))}
        </SidebarMenuButton>
      </ForegroundContainer>
    );
  }

  return (
    <Flex
      flexDir={"column"}
      marginRight={2}
      borderRight={1}
      borderStyle={"solid"}
      borderColor={"sub-opacity.400"}
      paddingX={2}
    >
      <Button
        size="large"
        width="auto"
        marginLeft={collapsed ? 0 : 5}
        icon={collapsed || toggled ? faBars : faBarsStaggered}
        onClick={onSidebarToggleButtonClick}
        transitionProperty="margin-left"
      />
      <RPSidebar>
        <Menu>
          {buttons?.map((button, index) => (
            <Box key={index}>{renderMenuButton(button)}</Box>
          ))}
        </Menu>
      </RPSidebar>
    </Flex>
  );
}

export default memo(Sidebar);
