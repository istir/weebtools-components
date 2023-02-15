import React, { HTMLAttributes } from 'react';

export type Props = {
  style?: React.CSSProperties;
  children: JSX.Element | string;
} & HTMLAttributes<HTMLParagraphElement>;
