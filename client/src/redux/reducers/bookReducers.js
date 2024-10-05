import { GET_BOOKS, ADD_BOOK, EDIT_BOOK, DELETE_BOOK } from '../actions/bookActions';

// Initial state
const initialState = {
  books: [],
};

// Reducer
export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return { ...state, books: action.payload };
    case ADD_BOOK:
      return { ...state, books: [...state.books, action.payload] };
    case EDIT_BOOK:
      return {
        ...state,
        books: state.books.map((book) =>
          book._id === action.payload._id ? action.payload : book
        ),
      };
    case DELETE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book._id !== action.payload),
      };
    default:
      return state;
  }
};
