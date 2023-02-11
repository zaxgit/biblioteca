import { useState, useEffect } from 'react';

import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';

import useBookStore from '../../store/useBookStore';
import Controls from './controls';
import BookList from './book/bookList';

export default function Library() {
  const supabase = useSupabaseClient();
  const user = useUser();

  const { books, loadBooks } = useBookStore();

  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadData() {
      const { data, error } = await supabase
        .from('books')
        .select('*')
        .eq('user_id', user.id);
      loadBooks(data);
      setError(error);
    }
    // Only run query once user is logged in.
    if (user) loadData();
  }, [user]);

  return (
    <div className='library'>
      <Controls />
      {error && <p>OOPs... failed to load books</p>}
      {books && <BookList books={books} />}
    </div>
  );
}
