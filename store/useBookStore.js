import { create } from 'zustand';

const useBookStore = create((set) => ({
  books: [],
  loadBooks: (fetchedBooks) => set(() => ({ books: fetchedBooks })),
  storeBook: (newBook) =>
    set((state) => ({ books: [...state.books, newBook] })),
  removeBook: (id) => {
    set((state) => ({
      books: state.books.filter((book) => book.id !== id),
    }));
  },
}));
export default useBookStore;
