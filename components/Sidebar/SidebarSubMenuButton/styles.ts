
import { createStyle, TextAlign } from "../../../styles/theme";

const subMenuMargin =20
export const styles = createStyle({
  menuItemContainer: {
    width: '100%',
  },
  menuItem: {
    width: '100%',
    justifyContent: 'flex-start',
  },
  subMenuItem: {
    marginLeft: subMenuMargin,
    width:`calc(100% - ${subMenuMargin}px)`
  },
  text: {
    textAlign:TextAlign.left
  },
  subMenuItemContent: {
    justifyContent:'flex-start'
  }
});

export default styles
