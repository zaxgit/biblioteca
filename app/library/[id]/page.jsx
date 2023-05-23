import supabase from '../../../utils/supabase';

import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const { data: bookIds } = await supabase.from('books').select('id');
  console.log(bookIds);

  return bookIds ?? [];
}

export default async function Book({ params: { id } }) {
  console.log(id);
  const { data: book } = await supabase
    .from('books')
    .select('*')
    .match({ id })
    .single();

  if (!book) {
    return notFound();
  }

  return <pre>{JSON.stringify(book, null, 2)}</pre>;
}
