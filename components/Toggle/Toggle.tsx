import { Switch } from '@chakra-ui/react';
import { memo } from 'react';

import { Props } from './types';

function Toggle({
  defaultState = false,
  onChecked = () => {},
  onUnchecked = () => {},
}: Props) {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked) {
      onChecked();
    } else {
      onUnchecked();
    }
  };
  return <Switch onChange={onChangeHandler} defaultChecked={defaultState} />;
}

export default memo(Toggle);
