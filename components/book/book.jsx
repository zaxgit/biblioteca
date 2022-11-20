export default function HorizontalBook({
  title,
  subtitle,
  mainAuthor,
  allAuthors,
  bookId,
  publisher,
  publishedOn,
  isOwned,
  pageCount,
}) {
  console.log(mainAuthor);
  return (
    <li className='h-book'>
      <h3 className='book-title'>{title}</h3>
      {subtitle ? <span className='book-subtitle'></span> : ''}
      <span className='book-author'>{mainAuthor}</span>
      {allAuthors.length > 1
        ? allAuthors.map((author, idx) => {
            <span key={idx}>{author}</span>;
          })
        : ''}
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
