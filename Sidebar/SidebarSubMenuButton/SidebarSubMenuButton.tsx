import { memo } from "react";

import styles from "./styles";
import { combineStyle } from "../../../styles/theme";
import { Props } from "./types";
import Button from "../../Button/Button";
import Text from "../../Text/Text";

function SidebarSubMenuButton({ icon, label, onClick }: Props) {
  return (
    <Button
      buttonType="plain"
      containerStyle={styles.menuItemContainer}
      style={combineStyle([styles.menuItem, styles.subMenuItem])}
      onClick={onClick}
      rightIcon={icon}
    >
      <Text style={styles.text}>{label}</Text>
    </Button>
  );
}

export default memo(SidebarSubMenuButton);
