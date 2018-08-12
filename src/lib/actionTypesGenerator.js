const standardActionTypes = [
  'REQUEST',
  'SUCCESS',
  'FAILURE',
];

export default function actionTypesGenerator(actionName, extendedTypes = []) {
  return [...standardActionTypes, ...extendedTypes].reduce((obj, type) => {
    // eslint-disable-next-line
    obj[type] = `${actionName}_${type}`;
    return obj;
  }, {});
}

