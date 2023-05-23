'use client';
import { useState, useEffect } from 'react';

import { useSupabase } from '../../../supabase-provider';

import HorizontalBook from './book';

// export const revalidate = 0;

export default function BookList({ books = [] }) {
  const { supabase } = useSupabase();

  useEffect(() => {}, []);

  if (books.length !== 0) {
    return (
      <ul className='books' style={{ marginBottom: '50px' }}>
        {books.map((book) => {
          return <HorizontalBook key={book.id} {...book} />;
        })}
      </ul>
    );
  }

  return <div>Sorry no books</div>;
}
