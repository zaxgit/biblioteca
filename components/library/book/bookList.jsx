import useBookStore from '../../../store/useBookStore';
import HorizontalBook from './book';

export default function BookList({ books }) {
  return (
    <ul className='books' style={{ marginBottom: '50px' }}>
      {books.map((book) => {
        return <HorizontalBook key={book.id} {...book} />;
      })}
    </ul>
  );
}
