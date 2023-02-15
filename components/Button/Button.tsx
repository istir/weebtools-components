import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CSSProperties, memo } from 'react';
import { combineStyle, EMPTY_STYLE } from '../../styles/theme';
import Text from '../Text/Text';
import { styles } from './styles';

import { Props } from './types';

function Button({
  buttonStyle={},
  children,
  buttonType = 'plain',
  buttonState='inactive',
  size = "medium",
  label,
  href,
  icon,
  download,
  badge,
  ...props
}: Props) {

  function getStyle(prop: Props['size'] | Props['buttonType']|Props['buttonState']):CSSProperties {
    if(!prop) return EMPTY_STYLE
    return styles?.[prop]
  }
  return (
    <div className='button-container' style={styles.container}>
      {badge ? <div style={styles.badge}>{badge}</div>:null}
      <button
        className='button'
        style={combineStyle([styles.button,getStyle(buttonType),getStyle(size),!children?styles.square:EMPTY_STYLE,getStyle(buttonState),buttonStyle])}
        {...props}
      >
        <div style={styles.contentContainer}>
          {icon?<FontAwesomeIcon icon={icon}/>:null}
          {children}
        </div>
      </button>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      </div>
    );
  
}

export default memo(Button);
