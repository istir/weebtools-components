import { Flex, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { memo } from 'react';

import { Props } from './types';

import Button from '@/weebtools-components/components/Button';

function SidebarSubMenuButton({
  icon,
  label,
  onClick,
  variant = 'plain',
}: Props) {
  return (
    <Button variant={variant} onClick={onClick}>
      <Flex justifyContent={'space-between'} width="full">
        <Text textAlign={'left'}>{label}</Text>
        {icon ? <FontAwesomeIcon icon={icon} /> : null}
      </Flex>
    </Button>
  );
}

export default memo(SidebarSubMenuButton);
