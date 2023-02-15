import { memo } from 'react'

import styles from './styles';
import { combineStyle } from '../../styles/theme';
import { Props } from './types'

function ForegroundContainer({ children }: Props) {
    const childrenToRender = Array.isArray(children)?children:[children]
    return (<div className='foreground-container' style={combineStyle([styles.container])}>{childrenToRender.map(child => (
        <div className='foreground' style={combineStyle([styles.foreground])}>
            {child}
        </div>
    )) }</div>);
}

export default memo(ForegroundContainer);