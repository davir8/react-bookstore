import { all, takeLatest } from 'redux-saga/effects';

import { Types as BookTypes } from '../ducks/books';
import { getAllBooks, getOneBook } from './books';

export default function* rootSaga() {
  yield all([
    takeLatest(BookTypes.GET_ALL_REQUEST, getAllBooks),
    takeLatest(BookTypes.GET_ONE_REQUEST, getOneBook),
  ]);
}
