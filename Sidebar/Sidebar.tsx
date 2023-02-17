import { memo } from "react";

import { combineStyle } from "../../styles/theme";
import { Props } from "./types";
import {
  Sidebar as RPSidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import Button from "../Button/Button";
import {
  faBars,
  faBarsStaggered,
  faChevronRight,
  faPastafarianism,
} from "@fortawesome/free-solid-svg-icons";
import { styles } from "./styles";
import ForegroundContainer from "../ForegroundContainer/ForegroundContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SidebarMenuButton from "./SidebarMenuButton/SidebarMenuButton";
import SidebarSubMenuButton from "./SidebarSubMenuButton/SidebarSubMenuButton";
function Sidebar({}: Props) {
  const { toggled, collapsed, collapseSidebar } = useProSidebar();
  const onSidebarToggleButtonClick = () => {
    collapseSidebar();
  };

  const collapsedStyle = collapsed ? styles.collapsed : styles.open;

  return (
    <div style={styles.container}>
      <Button
        style={combineStyle([collapsedStyle])}
        size="large"
        icon={collapsed || toggled ? faBars : faBarsStaggered}
        onClick={onSidebarToggleButtonClick}
      />
      <RPSidebar>
        <Menu>
          <ForegroundContainer
            innerStyle={styles.menuContainer}
            separator={false}
          >
            <SidebarMenuButton
              label="xd"
              icon={faPastafarianism}
              collapsed={collapsed}
            >
              <SidebarSubMenuButton label="xd" />
            </SidebarMenuButton>
          </ForegroundContainer>
        </Menu>
      </RPSidebar>
    </div>
  );
}

export default memo(Sidebar);
