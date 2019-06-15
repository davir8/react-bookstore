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
  loading: true,
  data: [],
  currentPage: 0,
  totalPage: 0,
  error: null,
};

export default function books(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return {
        ...state,
        loading: true,
        currentPage: action.payload.currentPage,
      };
    case Types.GET_SUCCESS:
      return {
        ...state,
        loading: false,
        currentPage: action.payload.data.currentPage,
        totalPage: action.payload.data.totalPage,
        data: [...state.data, ...action.payload.data.books],
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
  getBooksRequest: ({ search, currentPage = 0 }) => ({
    type: Types.GET_REQUEST,
    payload: { search, currentPage },
  }),

  getBooksSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),

  getBooksFailure: error => ({
    type: Types.GET_FAILURE,
    payload: { error },
  }),
};
