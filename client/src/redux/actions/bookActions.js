import api from '../../utils/api';

// Action types
export const GET_BOOKS = 'GET_BOOKS';
export const ADD_BOOK = 'ADD_BOOK';
export const EDIT_BOOK = 'EDIT_BOOK';
export const DELETE_BOOK = 'DELETE_BOOK';

// Action creators
export const getBooks = () => async (dispatch) => {
  const response = await api.get('/api/books');
  dispatch({
    type: GET_BOOKS,
    payload: response.data,
  });
};

export const addBook = (book) => async (dispatch) => {
  const response = await api.post('/api/books', book);
  dispatch({
    type: ADD_BOOK,
    payload: response.data,
  });
};

export const editBook = (id, updatedBook) => async (dispatch) => {
  const response = await api.put(`/api/books/${id}`, updatedBook);
  dispatch({
    type: EDIT_BOOK,
    payload: response.data,
  });
};

export const deleteBook = (id) => async (dispatch) => {
  await api.delete(`/api/books/${id}`);
  dispatch({
    type: DELETE_BOOK,
    payload: id,
  });
};
