export type Props = {
  defaultState?: boolean;
  onChecked?: VoidFunction;
  onUnchecked?: VoidFunction;
  containerStyle?: React.CSSProperties;
  pillStyle?: React.CSSProperties;
  state?: boolean;
  notClickable?: boolean;
};
