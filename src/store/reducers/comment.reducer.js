import actionTypes from '../actions/actionTypes';

const commentState = {
  list: [],
  isLoading: false,
  error: null,
};

export const commentsReducer = (oldState = commentState, action) => {
  console.log(action);
  if (action.type === actionTypes.CREATE_COMMENT_REQUEST) {
    return {
      ...oldState,
      isLoading: true,
    };
  }

  if (action.type === actionTypes.CREATE_COMMENT_SUCCESS) {
    return {
      ...oldState,
      isLoading: false,
      list: [...oldState.list, action.payload],
    };
  }

  if (action.type === actionTypes.CREATE_COMMENT_ERROR) {
    return {
      ...oldState,
      isLoading: false,
      error: action.payload,
    };
  }

  return oldState;
};