/* eslint-disable no-undef */
import { writeFile, mkdirSync } from 'fs'
import pkg from 'lodash';
import { join } from 'path'

import { sagaTemplate } from './saga.js'
import { selectorsTemplate } from './selectors.js'
import { sliceTemplate } from './slice.js';

const { capitalize } = pkg;
const storeName = process.argv[2]
const capitalizedStoreName = capitalize(storeName)
const upperCaseStoreName = storeName.toUpperCase()
const location = './src/store/'
if (!storeName) {
    console.error('No store name provided')
} else {
    const basePath = join(location, storeName)

    const saga = sagaTemplate(storeName)
    const slice = sliceTemplate(storeName)
    const selectors = selectorsTemplate(storeName, capitalizedStoreName, upperCaseStoreName)

    mkdirSync(basePath, { recursive: true })
    writeFile(join(basePath, `${storeName}Saga.ts`), saga, (err) => { if (err) console.log(err) })
    writeFile(join(basePath, `${storeName}Selector.ts`), selectors, (err) => { if (err) console.log(err) })
    writeFile(join(basePath, `${storeName}Slice.ts`), slice, (err) => { if (err) console.log(err) })

    console.log("Don't forget to correct stuff in ./src/store/rootReducer.ts and ./src/store/rootSaga.ts")

}