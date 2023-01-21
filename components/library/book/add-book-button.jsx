import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';

import { IoIosAdd } from 'react-icons/io';

export default function AddBookButton({ book }) {
  const supabase = useSupabaseClient();
  const user = useUser();

  const addBook = async () => {
    if (user) {
      const { error } = await supabase.from('books').insert({
        // id: book.id,
        title: book.title,
        subtitle: book.subtitle && book.subtitle,
        author: book.author && book.author,
        publisher: book.publisher && book.publisher,
        published_on: book.published_on && book.published_on,
        page_count: book.page_count && book.page_count,
        description: book.description && book.description,
        categories: book.categories && book.categories,
        user_id: user.id,
      });
    }
  };

  return (
    <button onClick={addBook}>
      <IoIosAdd />
    </button>
  );
}
