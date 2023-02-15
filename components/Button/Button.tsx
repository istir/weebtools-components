import { memo } from 'react';
import { useSelector } from 'react-redux';

import styles from './styles.module.css';

import { Props } from '@/components/Base/Button/types';
import { isMobileSelector } from '@/store/layout/layoutSelector';
function Button({
  buttonStyle,
  children,
  buttonType = 'normal',
  square,
  href,
  download,
  ...props
}: Omit<Props, 'className' | 'style'>) {
  const isMobile = useSelector(isMobileSelector);

  function getClassName() {
    switch (buttonType) {
      case 'normal':
        return styles.normal;
      case 'ghost':
        return styles.ghost;

      default:
        break;
    }
  }
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        className={`${getClassName()} ${isMobile ? styles.mobile : ''} ${
          square ? styles.square : ''
        }`}
        style={buttonStyle}
        rel="noreferrer"
        download={download}
      >
        {children}
      </a>
    );
  } else {
    return (
      <button
        className={`${getClassName()} ${isMobile ? styles.mobile : ''} ${
          square ? styles.square : ''
        }`}
        style={buttonStyle}
        {...props}
      >
        {children}
      </button>
    );
  }
}

export default memo(Button);
