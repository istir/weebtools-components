export const sagaTemplate = (storeName) => `import { all } from 'redux-saga/effects';


function* ${storeName}Saga() {
  yield all([
    // takeLatest(action.started.type, saga),
  ]);
}

export default ${storeName}Saga;`