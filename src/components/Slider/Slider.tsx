import { memo, useEffect, useState } from 'react';

import classes from './styles.module.css';
import { Props } from './types';

import { VoidFunction } from '@/constants/utils';

function Slider({
  defaultState = false,
  onChecked = VoidFunction,
  onUnchecked = VoidFunction,
  containerStyle,
  pillStyle
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
      className={classes.container}
      data-checked={checked}
      style={containerStyle}
      onClick={onClickHandler}
    >
      <div className={classes.pill} style={pillStyle}></div>
    </button>
  );
}

export default memo(Slider);
