import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSProperties, memo } from "react";
import { combineStyle, EMPTY_STYLE } from "../../styles/theme";
import Text from "../Text/Text";
import { styles } from "./styles";

import { Props } from "./types";

function Button({
  style = {},
  children,
  buttonType = "plain",
  buttonState = "inactive",
  size = "medium",
  label,
  href,
  icon,
  download,
  badge,
  rightIcon,
  rightIconRotated = false,
  containerStyle = EMPTY_STYLE,
  contentStyle = EMPTY_STYLE,
  ...props
}: Props) {
  function getIconSize() {
    switch (size) {
      case "small":
        return "1x";
      case "medium":
        return "xl";
      case "large":
        return "2x";
      default:
        return "1x";
    }
  }

  function getStyle(
    prop: Props["size"] | Props["buttonType"] | Props["buttonState"]
  ): CSSProperties {
    if (!prop) return EMPTY_STYLE;
    return styles?.[prop];
  }
  return (
    <div
      className="button-container"
      style={combineStyle([styles.container, containerStyle])}
    >
      {badge ? <div style={styles.badge}>{badge}</div> : null}
      <button
        className="button"
        style={combineStyle([
          styles.button,
          getStyle(buttonType),
          getStyle(size),
          !children ? styles.square : EMPTY_STYLE,
          getStyle(buttonState),
          style,
        ])}
        {...props}
      >
        <div
          style={combineStyle([
            styles.contentContainer,
            rightIcon ? styles.spaceContainer : EMPTY_STYLE,
            contentStyle,
          ])}
        >
          {icon ? <FontAwesomeIcon icon={icon} size={getIconSize()} /> : null}
          {children}
          {rightIcon ? (
            <FontAwesomeIcon
              icon={rightIcon}
              style={combineStyle([
                styles.rightIcon,
                rightIconRotated ? styles.rotated : EMPTY_STYLE,
              ])}
            />
          ) : null}
        </div>
      </button>
      {label ? <Text style={styles.label}>{label}</Text> : null}
    </div>
  );
}

export default memo(Button);
