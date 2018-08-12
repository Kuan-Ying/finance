import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [
  sagaMiddleware,
];

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

export default function configureStore() {
  const store = createStore(
    rootReducer,
    enhancer
  );

  sagaMiddleware.run(rootSaga);
  return store;
}
