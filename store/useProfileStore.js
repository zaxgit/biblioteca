import { create } from 'zustand';

const useProfileStore = create((set) => ({
  name: '',
  updateName: (newName) => set(() => ({ name: newName })),
}));
export default useProfileStore;
