import { create } from 'zustand';

const useBookStore = create((set) => ({
  books: [],
  loadBooks: (fetchedBooks) => set(() => ({ books: fetchedBooks })),
}));

export default useBookStore;
