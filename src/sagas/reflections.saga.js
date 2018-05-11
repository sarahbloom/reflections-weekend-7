import { call, put } from 'redux-saga/effects';
import axios from 'axios'

//Bookmark a specific saga by updating database
export function* bookmarkReflectionSaga(action){
    console.log('bookmarkReflectionSaga', action);
    try {
        yield call(axios.put, `/api/view/${action.payload.id}`, action.payload)
        yield put({
            type: 'FETCH_REFLECTIONS',
        })   
    } catch (error) {
        console.log('Error in PUT update bookmark status', error);
    }
}//end bookmarkReflectionSaga

//delete a reflection
export function* deleteReflectionSaga(action){
    try {
        yield call(axios.delete, `/api/view/${action.payload.id}`)
        yield put({
            type: 'FETCH_REFLECTIONS',
            // payload: action.payload
        })
    } catch (error) {
        console.log('Error in DELETE bookmark', error);
    }
}

//get reflections currently in the database
export function* getReflectionSaga(action) {
    // console.log('getReflectionSaga', action);
    try {
        const reflectionResponse = yield call(axios.get, '/api/view');
        yield put({
            type: 'DISPLAY_REFLECTIONS',
            payload: reflectionResponse.data
        })
    } catch (error) {
        console.log('Error in GET', error);
    }
}//end getReflectionSaga

//add a new reflection to the database
export function* postReflectionSaga(action) {
    // console.log('postReflectionSaga', action);
    try {
        yield call(axios.post, '/api/add', action.payload);
        yield put({
            type: 'FETCH_REFLECTIONS'
        })
    } catch (err) {
        console.log('error in POST new reflection', err);
    }
}// end postReflectionSaga

