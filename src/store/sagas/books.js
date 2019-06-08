import { call, put } from 'redux-saga/effects';
// import { toast } from 'react-toastify';
import api from '../../services/api';

import { Creators as BookActions } from '../ducks/books';

export function* getBooks(action) {
  try {
    const { data } = yield call(
      api.get,
      `https://www.googleapis.com/books/v1/volumes?q=${action.payload.search}&startIndex=${
        action.payload.page
      }&printType=books&maxResults=10&filter=paid-ebooks`,
    );

    const books = data.items.map(book => ({
      id: book.id,
      title: book.volumeInfo.title,
      description: book.volumeInfo.description || book.searchInfo.textSnippet,
      authors: book.volumeInfo.authors || [book.volumeInfo.publisher],
      averageRating: book.volumeInfo.averageRating || null,
      thumbnail: book.volumeInfo.imageLinks.thumbnail,
      price: book.saleInfo.listPrice.amount,
    }));

    yield put(BookActions.getBookSuccess(books));
  } catch (err) {
    yield put(BookActions.getBookFailure(err));
  } finally {
    // yield put(ModalActions.closeModal());
  }
}
