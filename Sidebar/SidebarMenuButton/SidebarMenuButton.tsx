import { memo } from "react";

import styles from "./styles";
import { combineStyle } from "../../../styles/theme";
import { Props } from "./types";
import { SubMenu } from "react-pro-sidebar";
import Button from "../../Button/Button";

function SidebarMenuButton({
  children,
  label,
  icon,
  collapsed = false,
}: Props) {
  return (
    <SubMenu
      label={label}
      className={`${collapsed ? "collapsed" : ""}`}
      component={
        <Button
          buttonType="tinted"
          containerStyle={styles.menuItemContainer}
          style={styles.menuItem}
          icon={icon}
        />
      }
    >
      {children}
    </SubMenu>
  );
}

export default memo(SidebarMenuButton);
