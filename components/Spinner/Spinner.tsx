import { Spinner as ChakraSpinner } from '@chakra-ui/react';
import { memo } from 'react';


import { Props } from './types';
function Spinner({ ...props }: Props) {
  return <ChakraSpinner speed={'0.65s'} {...props} />;
}

export default memo(Spinner);
