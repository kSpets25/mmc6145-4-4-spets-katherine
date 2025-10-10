// TODO: import actions and implement reducer for each action

import { ADD_BOOK, REMOVE_BOOK, SEARCH_BOOKS } from './actions';


// This helper function stores the favoriteBook state in localStorage as a string
function saveToLocalStorage(favBooks) {
  localStorage.setItem('favoriteBooks', JSON.stringify(favBooks))
}


const Reducer = (state = initialState, action) => {
  switch (action.action) {
    case ADD_BOOK: {
      const updatedFavorites = [...state.favoriteBooks, action.payload];
      saveToLocalStorage(updatedFavorites);
      return {
        ...state,
        favoriteBooks: updatedFavorites
      };
    }

    case REMOVE_BOOK: {
      const updatedFavorites = state.favoriteBooks.filter(book => book.id !== action.payload);
      saveToLocalStorage(updatedFavorites);
      return {
        ...state,
        favoriteBooks: updatedFavorites
      };
    }

    case SEARCH_BOOKS: {
      return {
        ...state,
        bookSearchResults: action.payload
      };
    }

    default:
      return state;
  }
};

export default Reducer;
