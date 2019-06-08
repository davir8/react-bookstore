import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as BookActions } from '../ducks/books';

export function* getAllBooks(action) {
  try {
    const { data } = yield call(
      api.get,
      `https://www.googleapis.com/books/v1/volumes?q=design${
        action.payload.search ? `+intitle:${action.payload.search}` : ''
      }&startIndex=${action.payload.page}&printType=books&maxResults=20&filter=paid-ebooks`,
    );

    const books = data.items.map(book => ({
      id: book.id,
      title: book.volumeInfo.title,
      description: book.volumeInfo.description || null,
      authors: book.volumeInfo.authors || [book.volumeInfo.publisher],
      averageRating: book.volumeInfo.averageRating || null,
      thumbnail: book.volumeInfo.imageLinks
        ? book.volumeInfo.imageLinks.thumbnail
        : 'https://www.floresebombons.com.br/sem_foto.jpg',
      price: book.saleInfo.listPrice ? book.saleInfo.listPrice.amount : null,
    }));

    yield put(
      BookActions.getAllBooksSuccess({
        books,
        total: data.totalItems,
        page: action.payload.page + 20,
      }),
    );
  } catch (err) {
    yield put(BookActions.getBookFailure(err));
  } finally {
    // yield put(ModalActions.closeModal());
  }
}

export function* getOneBook(action) {
  try {
    const { data } = yield call(
      api.get,
      `https://www.googleapis.com/books/v1/volumes/${action.payload.id}`,
    );

    const book = {
      id: data.id,
      title: data.volumeInfo.title,
      description: data.volumeInfo.description || null,
      authors: data.volumeInfo.authors || [data.volumeInfo.publisher],
      averageRating: data.volumeInfo.averageRating || null,
      thumbnail: data.volumeInfo.imageLinks
        ? data.volumeInfo.imageLinks.thumbnail
        : 'https://www.floresebombons.com.br/sem_foto.jpg',
      price: data.saleInfo.listPrice ? data.saleInfo.listPrice.amount : null,
    };

    yield put(BookActions.getOneBookSuccess(book));
  } catch (err) {
    yield put(BookActions.getBookFailure(err));
  } finally {
    // yield put(ModalActions.closeModal());
  }
}
