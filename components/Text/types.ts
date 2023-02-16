import React, { HTMLAttributes } from 'react';

export type Props = {
  children: JSX.Element | string;
} & HTMLAttributes<HTMLParagraphElement>;
