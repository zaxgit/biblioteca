import HorizontalBook from './book';

export default function BookList({ books }) {
  return (
    <ul className='books'>
      {books.map((book) => {
        return (
          <HorizontalBook
            key={book.id}
            title={book.title}
            author={book.author}
            publishedAt={book.publishedAt}
            owned={book.isOwned}
            type={book.type}
          />
        );
      })}
    </ul>
  );
}
