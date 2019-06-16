/**
 * Types
 */
export const Types = {
  GET_REQUEST: 'bookDetails/GET_REQUEST',
  GET_SUCCESS: 'bookDetails/GET_SUCCESS',
  GET_FAILURE: 'bookDetails/GET_FAILURE',
};

/**
 * Reducer
 */

const INITIAL_STATE = {
  loading: true,
  error: null,
  data: {},
};

export default function bookDetails(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    case Types.GET_FAILURE:
      return { ...state, loading: false, error: action.payload.error };

    default:
      return state;
  }
}

/**
 * Actions
 */
export const Creators = {
  getBookDetailsRequest: id => ({
    type: Types.GET_REQUEST,
    payload: { id },
  }),

  getBookDetailsSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),

  getBookDetailsFailure: error => ({
    type: Types.GET_FAILURE,
    payload: { error },
  }),
};
