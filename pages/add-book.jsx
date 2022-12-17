import BookList from '../components/book/book-list';
import { useState, useEffect } from 'react';

export default function AddBook() {
  // const searchTerm = useRef();
  const [query, setQuery] = useState('');
  const [fetchedBooks, setFetchedBooks] = useState([]);

  const isLongEnough = query.length > 0;
  const inputChangeHandler = (e) => {
    setQuery(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (isLongEnough) {
      fetch(`/api/add-book?q=${query ? query : ''}`)
        .then((res) => {
          if (!res.ok) {
            throw Error;
          }
          return res.json();
        })
        .then((data) => {
          const fetchedItems = data.items.map((item) => {
            return {
              bookId: item.id,
              title: item.volumeInfo.title,
              subtitle: item.volumeInfo.subtitle,
              authors: item.volumeInfo.authors,
              averageRating: item.volumeInfo.averageRating,
              categories: item.volumeInfo.categories,
              description: item.volumeInfo.description,
              publishedOn: item.volumeInfo.publishedDate,
              publisher: item.volumeInfo.publisher,
              pageCount: item.volumeInfo.pageCount,
            };
          });
          setFetchedBooks(fetchedItems);
        });
    }
  }, [query, isLongEnough]);

  return (
    <div className='add-book'>
      <form onSubmit={submitHandler}>
        <div className='add-book-control'>
          <label className='add-book-label' htmlFor='term'>
            Search
          </label>
          <input
            className='add-book-input'
            type='text'
            name='term'
            placeholder='Search'
            onChange={inputChangeHandler}
          />
        </div>
      </form>
      {fetchedBooks.length > 0 ? (
        <BookList books={fetchedBooks} />
      ) : (
        <p>Search for books!</p>
      )}
    </div>
  );
}
