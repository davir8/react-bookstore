import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as BookActions } from '../ducks/books';

export function* getBooks(action) {
  try {
    const { search, currentPage } = action.payload;
    const { data } = yield call(
      api.get,
      `/volumes?q=design${
        search ? `+intitle:${search}` : ''
      }&startIndex=${currentPage}&printType=books&maxResults=40&filter=paid-ebooks&key=AIzaSyAnh6A8UYle3wNsSTztzzTgKKCHj2YGoUY`,
    );

    let books = [];
    if (data.totalItems > 1) {
      books = data.items.map(book => ({
        id: book.id,
        thumbnail: book.volumeInfo.imageLinks
          ? book.volumeInfo.imageLinks.thumbnail
          : 'https://www.floresebombons.com.br/sem_foto.jpg',
      }));
    }

    yield put(
      BookActions.getBooksSuccess({
        books,
        totalPage: data.totalItems,
        currentPage: action.payload.currentPage + 40,
      }),
    );
  } catch (err) {
    yield put(BookActions.getBookFailure(err));
  }
}
