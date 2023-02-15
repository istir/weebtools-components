import { memo } from 'react';

import styles from './styles.module.css';

import { Props } from '@/components/Base/Text/types';
function Text({ style, children, ...props }: Props) {
  return (
    <p className={`${styles.text}`} style={style} {...props}>
      {children}
    </p>
  );
}

export default memo(Text);
