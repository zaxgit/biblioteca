'use client';
import { useState, useRef } from 'react';
// import { useSupabase } from '../../supabase-provider';

import BookList from '../library/book/bookList';

export default function SearchAddableBooks() {
  const searchTerm = useRef();
  const [fetchedBooks, setFetchedBooks] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const query = searchTerm.current.value;
    const isLongEnough = query.length > 0;

    if (isLongEnough) {
      fetch(`/api/get-book?q=${query && query}`)
        .then((res) => {
          if (!res.ok) {
            throw Error;
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          const fetchedItems = data.items.map((item) => {
            return {
              id: item.id,
              title: item.volumeInfo?.title,
              subtitle: item.volumeInfo?.subtitle,
              author: item.volumeInfo?.authors,
              publisher: item.volumeInfo?.publisher,
              published_on: item.volumeInfo?.publishedDate,
              page_count: item.volumeInfo?.pageCount,
              description: item.volumeInfo?.description,
              categories: item.volumeInfo?.categories,
              google_thumbnail: item.volumeInfo?.imageLinks?.thumbnail,
            };
          });
          setFetchedBooks(fetchedItems);
        });
    }
  };

  return (
    <div className='add-book'>
      <form onSubmit={submitHandler}>
        <div className='add-book-control'>
          {/* <label className='add-book-label' htmlFor='term'>
            Search Addable Books
          </label> */}
          <input
            autoFocus
            className='add-book-input'
            type='text'
            name='query'
            placeholder='Search Books'
            ref={searchTerm}
          />
        </div>
        <div className='form-actions'>
          <button type='submit'>Search Books</button>
        </div>
      </form>
      {fetchedBooks.length > 0 ? <BookList books={fetchedBooks} /> : ''}
    </div>
  );
}
