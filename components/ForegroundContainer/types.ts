import { FlexProps } from '@chakra-ui/react';

export type Props = {
  children: JSX.Element | JSX.Element[];
  style?: React.CSSProperties;
  innerStyle?: React.CSSProperties;
  row?: boolean;
  separator?: boolean;
} & FlexProps;
