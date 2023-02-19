import { Input as ChakraInput } from '@chakra-ui/react';
import { memo, useState } from 'react';

import { Props } from './types';

function Input({ getValue, ...props }: Props) {
  const [inputValue, setInputValue] = useState<string>(
    props.value?.toString() || props.defaultValue?.toString() || '',
  );

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    getValue?.(e.target.value.trim());
  };
  return (
    <ChakraInput
      variant="filled"
      value={inputValue}
      onChange={(e) => {
        props.onChange?.(e);
        onChangeHandler(e);
      }}
    />
  );
}

export default memo(Input);
