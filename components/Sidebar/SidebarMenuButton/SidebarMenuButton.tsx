import { memo } from "react";

import { Props } from "./types";
import { SubMenu } from "react-pro-sidebar";
import Button from "../../Button/Button";
import { Box } from "@chakra-ui/react";

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
      className={`${collapsed ? "collapsed" : ""}`}
      onClick={onClickHandler}
      component={<Button variant="tinted" icon={icon} />}
    >
      <Box marginLeft={8}>{collapsed ? null : children}</Box>
    </SubMenu>
  );
}

export default memo(SidebarMenuButton);
