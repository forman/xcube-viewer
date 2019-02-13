import * as React from 'react';
import { Provider } from 'react-redux';
import * as ReactDOM from 'react-dom';
import * as Redux from 'redux';
import thunk from 'redux-thunk';
import * as ReduxLogger from 'redux-logger';
import { appReducer } from './reducers/appReducer';
import { updateDatasets } from './actions/dataActions';
import App from './connected/App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

const logger = ReduxLogger.createLogger({collapsed: false, diff: true});
const store = Redux.createStore(appReducer, Redux.applyMiddleware(thunk, logger));
store.dispatch(updateDatasets() as any);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root') as HTMLElement
);

registerServiceWorker();
