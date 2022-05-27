import { call, put, takeLatest } from 'redux-saga/effects';
import * as api from '../../api/index';
import { createCommentActionError, createCommentActionSuccess } from '../actions/actionCreators';
import actionTypes from '../actions/actionTypes';


export function* createComment(action) {
    try {
        const result = yield call(api.commentRequest, action.payload);
        yield put(createCommentActionSuccess(result));
    } catch (error) {
        yield put(createCommentActionError(error));
    }
}


function* commentSaga () {
    yield takeLatest(actionTypes.CREATE_COMMENT_REQUEST, createComment);
}

export default commentSaga;