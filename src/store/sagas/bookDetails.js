import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as BookDetailsActions } from '../ducks/bookDetails';

export function* getBookDetails(action) {
  try {
    const { id } = action.payload;
    const { data } = yield call(api.get, `/volumes/${id}`);

    // formatting object data
    const book = {
      id: data.id,
      title: data.volumeInfo.title,
      description: data.volumeInfo.description || null,
      authors: data.volumeInfo.authors || [data.volumeInfo.publisher],
      averageRating: data.volumeInfo.averageRating || 0,
      thumbnail: data.volumeInfo.imageLinks
        ? data.volumeInfo.imageLinks.thumbnail
        : 'https://www.floresebombons.com.br/sem_foto.jpg',
      price: data.saleInfo.listPrice ? data.saleInfo.listPrice.amount : null,
      pageCount: data.volumeInfo.pageCount,
    };

    yield put(BookDetailsActions.getBookDetailsSuccess(book));
  } catch (err) {
    yield put(BookDetailsActions.getBookDetailsFailure(err));
  }
}
