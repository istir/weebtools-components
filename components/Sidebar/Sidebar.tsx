import { Box, Flex } from '@chakra-ui/react';
import { faBars, faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { memo } from 'react';
import { Sidebar as RPSidebar, Menu, useProSidebar } from 'react-pro-sidebar';

import SidebarMenuButton from './SidebarMenuButton/SidebarMenuButton';
import SidebarSubMenuButton from './SidebarSubMenuButton/SidebarSubMenuButton';
import { Props, SidebarMainButtonType } from './types';

import Button from '@/weebtools-components/components/Button/Button';
import ForegroundContainer from '@/weebtools-components/components/ForegroundContainer/ForegroundContainer';

function Sidebar({ buttons, footer }: Props) {
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
          onClick={onClick}>
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
      flexDir={'column'}
      borderRight={1}
      borderStyle={'solid'}
      borderColor={'sub-opacity.400'}
      paddingX={2}>
      <Button
        size="large"
        width="auto"
        marginLeft={collapsed ? 0 : 5}
        icon={collapsed || toggled ? faBars : faBarsStaggered}
        onClick={onSidebarToggleButtonClick}
        transitionProperty="margin-left"
      />
      <Flex justifyContent={'space-between'} flexDir={'column'} height="full">
        <RPSidebar>
          <Menu>
            {buttons?.map((button, index) => (
              <Box key={index}>{renderMenuButton(button)}</Box>
            ))}
          </Menu>
        </RPSidebar>
        {footer ? <Box>{footer}</Box> : null}
      </Flex>
    </Flex>
  );
}

export default memo(Sidebar);
