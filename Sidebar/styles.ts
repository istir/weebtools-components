import { Colors } from "../../styles/colors";
import {
  createStyle,
  FlexDirection,
  TRANSITION_DURATION,
  TRANSITION_TIMING,
} from "../../styles/theme";

const subMenuMargin = 20
export const styles = createStyle({
  //btn
  container: {
    backgroundColor: Colors.secondary100,
    "--sidebar-button": Colors.surfaceTint,
    "--sidebar-button-hover": Colors.main400,
    "--sidebar-button-transition-duration": TRANSITION_DURATION,
    "--sidebar-button-transition-timing": TRANSITION_TIMING,
    color: Colors.primaryText,
    marginRight: 15,
    borderRight:`1px solid ${Colors.secondary200}`
  },
  collapsed: {
    marginLeft: 15,
  },
  open: {
    marginLeft: 25,
  },
  menuContainer: {
    // background: '#f00',
    width:'100%'
  },
  menuItemContainer: {
    width: '100%',
  },


});
