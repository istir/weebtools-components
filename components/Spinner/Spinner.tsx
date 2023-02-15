import React, { memo } from 'react';

import styles from './styles.module.css';

import { Props } from '@/components/Base/Spinner/types';
function Spinner({ size = 26 }: Props) {
  const evenSize = 2 * Math.round(size / 2);

  const style = {
    '--size': `${evenSize}px`
  } as React.CSSProperties;

  return (
    <div className={styles.container}>
      <svg className={styles.spinner} style={style}>
        <circle
          cx={`${evenSize / 2}px`}
          cy={`${evenSize / 2}px`}
          r={`${evenSize / 2 - 1}px`}
        ></circle>
      </svg>
    </div>
  );
}

export default memo(Spinner);
