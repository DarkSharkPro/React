import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import sagas from './sagas/index';
import reducers from './reducers/index';

const logger = createLogger({
	collapsed: true
});

export const history = createHistory();

const sagaMiddleware = createSagaMiddleware();
const historyMiddleware = routerMiddleware(history);

export const store = createStore(
	reducers,
	applyMiddleware(
		logger,
		sagaMiddleware,
		historyMiddleware
	)
);

sagaMiddleware.run(sagas);