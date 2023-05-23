'use client';
// import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
// import useBookStore from '../../../store/useBookStore';

import { Add } from '../../../lib/icons/icons';

export default function AddBookButton({ book }) {
  // const supabase = useSupabaseClient();
  // const user = useUser();

  // const storeBook = useBookStore((state) => state.storeBook);

  const addBook = async () => {
    if (user) {
      const { data, error } = await supabase
        .from('books')
        .insert({
          title: book.title,
          subtitle: book.subtitle && book.subtitle,
          author: book.author && book.author,
          publisher: book.publisher && book.publisher,
          published_on: book.published_on && book.published_on,
          page_count: book.page_count && book.page_count,
          description: book.description && book.description,
          categories: book.categories && book.categories,
          user_id: user.id,
          google_id: book.id,
          google_thumbnail: book.google_thumbnail && book.google_thumbnail,
          is_owned: true,
        })
        .select('*');
      // storeBook(data[0]);
    }
  };

  return (
    <button className='btn add-book-btn' onClick={addBook}>
      <Add />
    </button>
  );
}
