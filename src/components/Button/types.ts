import React, { ButtonHTMLAttributes } from 'react';

export type Props = {
  buttonStyle?: React.CSSProperties;
  children: JSX.Element;
  buttonType?: 'normal' | 'ghost';
  square?: boolean;
  href?: string;
  download?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;
