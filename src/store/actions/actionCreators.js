import actionTypes from './actionTypes';

export const createCommentAction = (payload) => ({
  type: actionTypes.CREATE_COMMENT_REQUEST,
  payload,
});

export const createCommentActionSuccess = (payload) => ({
  type: actionTypes.CREATE_COMMENT_SUCCESS,
  payload,
});

export const createCommentActionError = (payload) => ({
  type: actionTypes.CREATE_COMMENT_ERROR,
  payload,
});
