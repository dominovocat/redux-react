import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import commentSaga from './comments.saga';



export const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
    yield all([
        commentSaga(),
    ])
}