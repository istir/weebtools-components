import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

import { DEFAULT_BORDER_RADIUS } from '@/weebtools-components/styles/chakra/constants';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const variants = {
  filled: definePartsStyle({
    field: {
      bg: 'sub-opacity.800',
      borderRadius: DEFAULT_BORDER_RADIUS,
      backdropBlur: 10,
      _hover: {
        bg: 'sub.650',
      },
      _focus: {
        bg: 'main-opacity.300',
        borderColor: 'main-opacity.400',
      },
    },
  }),
};

export const inputTheme = defineMultiStyleConfig({
  variants,
});
