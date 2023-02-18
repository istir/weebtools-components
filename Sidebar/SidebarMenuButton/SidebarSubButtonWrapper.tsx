import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import React, { memo } from "react";
import Button from "../../Button";
import { SidebarSubMenuButtonType } from "../types";
import { Props } from "./types";

const SidebarSubButtonWrapper = React.forwardRef(
  (icon: IconDefinition, ref) => {
    return <Button variant="tinted" />;
  }
);

export default memo(SidebarSubButtonWrapper);
