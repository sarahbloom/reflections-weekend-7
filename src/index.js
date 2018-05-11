import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import 'typeface-roboto';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import './index.css';
import App from './components/App/App';
import reducers from './redux/reducers/ReflectionReducers.js';
import rootSaga from './sagas/root.saga.js'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware, logger),
); //end store

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#B388FF',
            contrastText: '#000000',
        },
        secondary: {
            main: '#1A237E',
            contrastText: '#000000',
        },
    },
});

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <App />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
