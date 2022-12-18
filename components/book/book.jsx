export default function HorizontalBook({
  title,
  subtitle,
  authors,
  bookId,
  publisher,
  publishedOn,
  isOwned,
  pageCount,
}) {
  return (
    <li className='h-book'>
      <h3 className='book-title'>{title}</h3>
      {subtitle ? <span className='book-subtitle'></span> : ''}
      <span className='book-author'>{authors}</span>
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
            <td className='book-data_point'>{publishedOn}</td>
            <td className='book-data_point'>{pageCount}</td>
          </tr>
        </tbody>
      </table>
    </li>
  );
}
