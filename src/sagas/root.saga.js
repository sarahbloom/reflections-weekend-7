import { takeEvery } from "redux-saga/effects";
import { getReflectionSaga, postReflectionSaga} from './reflections.saga.js'

function* rootSaga() {
    // console.log('rootSaga loaded');
    yield takeEvery('FETCH_REFLECTIONS', getReflectionSaga);
    yield takeEvery('POST_REFLECTION', postReflectionSaga);
}

export default rootSaga