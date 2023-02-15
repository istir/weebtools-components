export const componentTemplate = (componentName) => `import { memo } from 'react'

import styles from './styles';
import { combineStyle } from "@/styles/colors";
import { Props } from './types'

function ${componentName}({ }:Props) {
    return (<div style={combineStyle([styles.container])}>Component: ${componentName}</div>);
}

export default memo(${componentName});`