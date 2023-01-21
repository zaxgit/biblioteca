import BookList from '../library/book/book-list';
import { useState, useEffect } from 'react';

export default function SearchBooks() {
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
      fetch(`/api/get-book?q=${query ? query : ''}`)
        .then((res) => {
          if (!res.ok) {
            throw Error;
          }
          return res.json();
        })
        .then((data) => {
          const fetchedItems = data.items.map((item) => {
            return {
              id: item.id,
              title: item.volumeInfo.title,
              subtitle: item.volumeInfo.subtitle,
              author: item.volumeInfo.authors,
              publisher: item.volumeInfo.publisher,
              published_on: item.volumeInfo.publishedDate,
              page_count: item.volumeInfo.pageCount,
              description: item.volumeInfo.description,
              categories: item.volumeInfo.categories,
              // image_link: item.volumeInfo.image_links.thumbnail,
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
            Search Addable Books
          </label>
          <input
            className='add-book-input'
            type='text'
            name='term'
            placeholder='Search Books'
            onChange={inputChangeHandler}
          />
        </div>
      </form>
      {fetchedBooks.length > 0 ? <BookList books={fetchedBooks} /> : ''}
    </div>
  );
}
