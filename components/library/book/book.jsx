import AddBookButton from './add-book-button';

export default function HorizontalBook(props) {
  const { title, subtitle, author, publisher, published_on, page_count } =
    props;

  return (
    <li className='h-book'>
      <h3 className='book-title'>{title}</h3>
      {subtitle ? <span className='book-subtitle'>{subtitle}</span> : ''}
      <span className='book-author'>{author}</span>
      <table>
        <thead>
          <tr className='book-data_row'>
            <td className='book-data_header'>Publisher</td>
            <td className='book-data_header'>Published Date</td>
            <td className='book-data_header'>Pages Count</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='book-data_point'>{publisher}</td>
            <td className='book-data_point'>{published_on}</td>
            <td className='book-data_point'>{page_count}</td>
          </tr>
        </tbody>
      </table>
      <AddBookButton book={{ ...props }} />
    </li>
  );
}
