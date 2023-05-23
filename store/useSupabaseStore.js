import { create } from 'zustand';
import { createClient } from '@supabase/supabase-js';

const useSupabaseStore = create((set) => ({
  supabase: set(() => {
    createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_KEY
    );
  }),
}));
export default useSupabaseStore;
