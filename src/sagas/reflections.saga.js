import { call, put } from 'redux-saga/effects';
import axios from 'axios'

//get reflections currently in the DB
export function* getReflectionSaga(action) {
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

//add a new reflection to the DB
export function* postReflectionSaga(action) {
    // console.log(action);
    try {
        yield call(axios.post, '/api/add', action.payload);
        yield put({
            type: 'FETCH_REFLECTIONS'
        })
    } catch (err) {
        console.log('error in POST new reflection', err);
    }
}// end postReflectionSaga

