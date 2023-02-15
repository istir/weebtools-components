import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import classes from './styles.module.css';
import { Props } from './types';

import { VoidFunction } from '@/constants/utils';
import { isMobileSelector } from '@/store/layout/layoutSelector';
function Checkbox({
  defaultState = false,
  onChecked = VoidFunction,
  onUnchecked = VoidFunction,
  containerStyle,
  pillStyle,
  state,
  notClickable
}: Props) {
  const isMobile = useSelector(isMobileSelector);

  const [checked, setChecked] = useState<boolean>(
    state !== undefined ? state : defaultState
  );

  useEffect(() => {
    if (state !== undefined) return;
    checked && onChecked();
    !checked && onUnchecked();
  }, [checked]);

  const onClickHandler = () => {
    if (state !== undefined || notClickable) return;
    setChecked((prevChecked) => !prevChecked);
  };

  function renderCheckbox() {
    return (
      <div className={classes.checkContainer} style={pillStyle}>
        <FontAwesomeIcon icon={faCheck} className={classes.icon} />
      </div>
    );
  }
  if (notClickable)
    return (
      <div
        className={classes.container}
        data-checked={state}
        style={containerStyle}
      >
        {renderCheckbox()}
      </div>
    );
  return (
    <button
      className={`${classes.container} ${isMobile ? classes.mobile : ''}`}
      data-checked={state || checked}
      style={containerStyle}
      onClick={onClickHandler}
    >
      {renderCheckbox()}
    </button>
  );
}

export default memo(Checkbox);
