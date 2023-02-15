export const selectorsTemplate = (selectorName) => `import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '..';

const ${selectorName}StateSelector = (state: RootState) => state.${selectorName};

// const Selector = createSelector(${selectorName}StateSelector, (state) => state.);

`