/**
 * Types
 */
export const Types = {
  GET_REQUEST: 'books/GET_REQUEST',
  GET_SUCCESS: 'books/GET_SUCCESS',
  GET_FAILURE: 'books/GET_FAILURE',
};

/**
 * Reducer
 */

const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null,
};

export default function books(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.GET_SUCCESS:
      return {
        loading: false,
        error: null,
        data: [...state.data, ...action.payload.data],
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
  getBookRequest: (search, page = 7) => ({
    type: Types.GET_REQUEST,
    payload: { search, page },
  }),

  getBookSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),

  getBookFailure: error => ({
    type: Types.GET_FAILURE,
    payload: { error },
  }),
};
