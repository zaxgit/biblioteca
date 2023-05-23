import HorizontalBook from './book';

export default function BookList({ books = [] }) {
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
