// TODO: Add and export actions: ADD_BOOK, REMOVE_BOOK, SEARCH_BOOKS

export const ADD_BOOK = 'ADD_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const SEARCH_BOOKS = 'SEARCH_BOOKS';

export const addBook = (book) => ({
    type: ADD_BOOK,
    payload: book
});

export const removeBook = (bookId) => ({
    type: REMOVE_BOOK,
    payload: book
});

export const searchBooks = (books) => ({
    type: SEARCH_BOOKS,
    payload: books,
})


