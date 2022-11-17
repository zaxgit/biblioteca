export default function HorizontalBook({
  title,
  author,
  id,
  publishedAt,
  isOwned,
  pageCount,
}) {
  return (
    <li className='book'>
      <h3 className='book-title'>{title}</h3>
      <span className='book-author'>{author}</span>
      {/* <table>
        <thead>
          <tr className='book-data_row'>
            <td className='book-data_header'></td>
            <td className='book-data_header'></td>
            <td className='book-data_header'></td>
            <td className='book-data_header'></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='book-data_point'></td>
            <td className='book-data_point'></td>
            <td className='book-data_point'></td>
            <td className='book-data_point'></td>
          </tr>
        </tbody>
      </table> */}
    </li>
  );
}
