/**
 * Types
 */
export const Types = {
  GET_ALL_REQUEST: 'books/GET_ALL_REQUEST',
  GET_ALL_SUCCESS: 'books/GET_ALL_SUCCESS',
  GET_ONE_REQUEST: 'books/GET_ONE_REQUEST',
  GET_ONE_SUCCESS: 'books/GET_ONE_SUCCESS',
  GET_FAILURE: 'books/GET_FAILURE',
};

/**
 * Reducer
 */

const INITIAL_STATE = {
  loading: false,
  data: [],
  page: 0,
  total: 0,
  selected: null,
  error: null,
};

export default function books(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_ALL_REQUEST:
      return {
        ...state,
        loading: true,
        page: action.payload.page,
      };
    case Types.GET_ALL_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        page: action.payload.data.page,
        total: action.payload.data.total,
        data: [...state.data, ...action.payload.data.books],
      };
    case Types.GET_ONE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.GET_ONE_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        selected: action.payload.data,
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
  getAllBooksRequest: ({ search, page = 0 }) => ({
    type: Types.GET_ALL_REQUEST,
    payload: { search, page },
  }),

  getAllBooksSuccess: data => ({
    type: Types.GET_ALL_SUCCESS,
    payload: { data },
  }),

  getOneBookRequest: ({ id }) => ({
    type: Types.GET_ONE_REQUEST,
    payload: { id },
  }),

  getOneBookSuccess: data => ({
    type: Types.GET_ONE_SUCCESS,
    payload: { data },
  }),

  getBookFailure: error => ({
    type: Types.GET_FAILURE,
    payload: { error },
  }),
};
