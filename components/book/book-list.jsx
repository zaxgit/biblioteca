import HorizontalBook from './book';

export default function BookList({ books }) {
  return (
    <ul className='books'>
      {books.map((book) => {
        return (
          <HorizontalBook
            key={book.bookId}
            title={book.title}
            subtitle={book.subtitle}
            authors={book.authors}
            categories={book.categories}
            publishedOn={book.publishedOn}
            publisher={book.publisher}
            pageCount={book.pageCount}
            description={book.description}
            owned={book.isOwned}
            type={book.type}
          />
        );
      })}
    </ul>
  );
}
