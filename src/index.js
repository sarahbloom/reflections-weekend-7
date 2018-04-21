import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

const sagaMiddleware = createSagaMiddleware();

function* rootSaga(){
    console.log('rootSaga loaded');
    yield takeEvery("FETCH_REFLECTIONS", getReflectionSaga)
}

function* getReflectionSaga(action){
    console.log('getReflectionSaga loaded');
    console.log(action);
    
    try {
        const reflectionResponse = yield call(axios.get, '/api/view');
        yield put({
            type: "DISPLAY_REFLECTIONS",
            payload: reflectionResponse.data
        })
    } catch (error) {
        console.log('Error in GET', error);
    }
}//end getReflectionSaga

const plantList = (state=[], action) =>{
    switch (action.type) {
        case "DISPLAY_REFLECTIONS":
            console.log('in reducer - DISPLAY_REFLECTIONS');
        
            return action.payload;
        default:
            return state;
    }
}

const store = createStore(
    combineReducers({plantList}),
    applyMiddleware(sagaMiddleware, logger),
); //end store

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
