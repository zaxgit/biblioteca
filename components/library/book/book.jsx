import Image from 'next/image';
import AddBookButton from './add-book-button';
import RemoveBookButton from './removeBookButton';

export default function HorizontalBook(props) {
  const {
    title,
    subtitle,
    author,
    publisher,
    published_on,
    page_count,
    google_thumbnail,
    is_owned,
  } = props;

  return (
    <li className='h-book'>
      <Image
        className='thumb'
        src={google_thumbnail}
        width='75'
        height='115'
        alt='book cover'
      />
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
      <div className='book-actions'>
        {!is_owned && <AddBookButton book={{ ...props }} />}
        {is_owned && <RemoveBookButton id={props.id} />}
      </div>
    </li>
  );
}
