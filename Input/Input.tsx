import { memo, useState } from 'react';
import ForegroundContainer from '../ForegroundContainer/ForegroundContainer';
import { styles } from './styles';

import classes from './styles.module.css';
import { Props } from './types';


function Input({ getValue, ...props }: Props) {
  const [inputValue, setInputValue] = useState<string>(
    props.value?.toString() || props.defaultValue?.toString() || ''
  );

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    getValue?.(e.target.value.trim());
  };

  return (
    <ForegroundContainer>
    <input
        type="text"
        className='input'
      style={styles.input}
      {...props}
      value={inputValue}
      onChange={(e) => {
        props.onChange?.(e);
        onChangeHandler(e);
      }}
      />
      </ForegroundContainer>
  );
}

export default memo(Input);
