import { Box } from '@chakra-ui/react';
import { memo } from 'react';
import { SubMenu } from 'react-pro-sidebar';

import { Props } from './types';

import Button from '@/weebtools-components/components/Button';

function SidebarMenuButton({
  children,
  label,
  icon,
  collapsed = false,
  onClick,
}: Props) {
  const onClickHandler = () => {
    if (collapsed) {
      onClick?.();
    }
  };
  return (
    <SubMenu
      label={label}
      className={`${collapsed ? 'collapsed' : ''}`}
      onClick={onClickHandler}
      component={<Button variant="tinted" icon={icon} />}>
      <Box marginLeft={8}>{collapsed ? null : children}</Box>
    </SubMenu>
  );
}

export default memo(SidebarMenuButton);
