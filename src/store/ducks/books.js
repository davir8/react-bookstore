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
  search: '',
};

export default function books(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST: {
      const { search, currentPage, totalPage } = action.payload;
      return {
        ...state,
        loading: true,
        error: '',
        totalPage: totalPage === 0 ? 0 : state.totalPage,
        data: totalPage === 0 && currentPage === 0 ? [] : state.data,
        search: search !== '' ? search : state.search,
        currentPage: action.payload.currentPage,
      };
    }
    case Types.GET_SUCCESS: {
      const { currentPage, totalPage, search } = action.payload.data;

      return {
        ...state,
        loading: false,
        currentPage,
        totalPage,
        data:
          currentPage === 20 || search
            ? [...action.payload.data.books]
            : [...state.data, ...action.payload.data.books],
      };
    }
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
  getBooksRequest: ({ search, currentPage = 0, totalPage = 0 }) => ({
    type: Types.GET_REQUEST,
    payload: { search, currentPage, totalPage },
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
