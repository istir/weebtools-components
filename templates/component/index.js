/* eslint-disable no-undef */
import { writeFile, mkdirSync } from 'fs'
import { join } from 'path'

import { componentTemplate } from './component.js'
import { stylesTemplate } from './styles.js'
import { typesTemplate } from './types.js'

const componentName = process.argv[2]
const location = `./${process.argv[3] || 'components'}`
if (!componentName) {
    console.error('No component name provided')
} else {
    const basePath = join(location, componentName)

    const component = componentTemplate(componentName)
    const styles = stylesTemplate()
    const types = typesTemplate()

    mkdirSync(basePath, { recursive: true })
    writeFile(join(basePath, `${componentName}.tsx`), component, (err) => { if (err) console.log(err) })
    writeFile(join(basePath, 'styles.ts'), styles, (err) => { if (err) console.log(err) })
    writeFile(join(basePath, 'types.ts'), types, (err) => { if (err) console.log(err) })
}