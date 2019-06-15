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
      }&startIndex=${currentPage}&printType=books&maxResults=20&filter=paid-ebooks`,
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
      pageCount: book.volumeInfo.pageCount,
    }));

    yield put(
      BookActions.getBooksSuccess({
        books,
        totalPage: data.totalItems,
        currentPage: action.payload.currentPage + 20,
      }),
    );
  } catch (err) {
    yield put(BookActions.getBookFailure(err));
  } finally {
    // yield put(ModalActions.closeModal());
  }
}
