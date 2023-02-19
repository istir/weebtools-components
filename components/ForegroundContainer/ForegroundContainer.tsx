import { Flex } from '@chakra-ui/react';
import { memo } from 'react';

import { Props } from './types';

import { DEFAULT_BORDER_RADIUS } from '@/weebtools-components/styles/chakra/constants';

function ForegroundContainer({ children, ...props }: Props) {
  return (
    <Flex
      flexDir={'column'}
      backgroundColor={'sub.150'}
      borderRadius={DEFAULT_BORDER_RADIUS}
      boxShadow="md"
      gap={2}
      marginBottom={2}
      marginX={1}
      {...props}>
      {children}
    </Flex>
  );
}

export default memo(ForegroundContainer);
