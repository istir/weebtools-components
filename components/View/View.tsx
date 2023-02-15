import { memo } from 'react'

import styles from './styles';
import { combineStyle } from '../../styles/theme';
import { Props } from './types'

function View({children,...props}:Props) {
    return (<div style={combineStyle([styles.container])} {...props}>{children}</div>);
}

export default memo(View);