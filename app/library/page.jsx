import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { headers, cookies } from 'next/headers';

import BookList from '../components/library/book/bookList';
import SidebarFilter from '../components/library/sidebarFilter';

export default async function Library() {
  const supabase = createServerComponentSupabaseClient({
    headers,
    cookies,
  });

  const { data, error } = await supabase.auth.getSession();

  const { data: books } = await supabase.from('books').select();

  return (
    <div className='library'>
      <SidebarFilter />
      {books && <BookList books={books} />}
    </div>
  );
}
