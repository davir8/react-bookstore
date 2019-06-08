import { all, takeLatest } from 'redux-saga/effects';

import { Types as BookTypes } from '../ducks/books';
import { getBooks } from './books';

export default function* rootSaga() {
  yield all([takeLatest(BookTypes.GET_REQUEST, getBooks)]);
}
