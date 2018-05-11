import { takeEvery } from "redux-saga/effects";
import {
    bookmarkReflectionSaga,
    deleteReflectionSaga, 
    getReflectionSaga,
    postReflectionSaga
} from './reflections.saga.js'

function* rootSaga() {
    // console.log('rootSaga loaded');
    yield takeEvery('UPDATE_BOOKMARK_STATUS', bookmarkReflectionSaga);
    yield takeEvery('DELETE_REFLECTION', deleteReflectionSaga);
    yield takeEvery('FETCH_REFLECTIONS', getReflectionSaga);
    yield takeEvery('POST_REFLECTION', postReflectionSaga)
}

export default rootSaga