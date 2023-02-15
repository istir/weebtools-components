import { memo, useEffect, useState } from 'react';
import { combineStyle, EMPTY_STYLE } from '../../styles/theme';
import { styles } from './styles';

import { Props } from './types';


function Toggle({
  defaultState = false,
  onChecked = () => { },
  onUnchecked = ()=>{},
  containerStyle=EMPTY_STYLE,
  pillStyle=EMPTY_STYLE
}: Props) {
  const [checked, setChecked] = useState<boolean>(defaultState);

  useEffect(() => {
    checked && onChecked();
    !checked && onUnchecked();
  }, [checked]);

  const onClickHandler = () => {
    setChecked((prevChecked) => !prevChecked);
  };
  return (
    <button
      style={combineStyle([styles.toggle,checked?styles.checked:styles.unchecked,containerStyle])}
      onClick={onClickHandler}
    >
      <div style={combineStyle([styles.pill,checked?styles.pillChecked:styles.pillUnchecked,pillStyle])}></div>
    </button>
  );
}

export default memo(Toggle);
