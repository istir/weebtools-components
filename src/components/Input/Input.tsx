import { memo, useState } from 'react';
import { useSelector } from 'react-redux';

import classes from './styles.module.css';
import { Props } from './types';

import { isMobileSelector } from '@/store/layout/layoutSelector';

function Input({ getValue, ...props }: Props) {
  const isMobile = useSelector(isMobileSelector);
  const [inputValue, setInputValue] = useState<string>(
    props.value?.toString() || props.defaultValue?.toString() || ''
  );

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    getValue?.(e.target.value.trim());
  };

  return (
    <input
      type="text"
      className={`${classes.container} ${isMobile ? classes.mobile : ''}`}
      {...props}
      value={inputValue}
      onChange={(e) => {
        props.onChange?.(e);
        onChangeHandler(e);
      }}
    />
  );
}

export default memo(Input);
