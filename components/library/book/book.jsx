import AddBookButton from './addBookButton';
import RemoveBookButton from './removeBookButton';
import { Book } from '../../../lib/elements/book';

import Link from 'next/link';
import { RightArr } from '../../../lib/icons/icons';
export default function HorizontalBook(props) {
  const {
    title,
    subtitle,
    author,
    published_on,
    categories,
    google_thumbnail,
    is_owned,
  } = props;

  return (
    <Book
      title={title}
      subtitle={subtitle}
      author={author}
      thumbnail={google_thumbnail}
      categories={categories}
      published_on={published_on}
    >
      {!is_owned && (
        <li className='icon-btn'>
          <AddBookButton book={{ ...props }} />
        </li>
      )}
      {is_owned && (
        <>
          <li className='icon-btn'>
            <Link href='/'>
              <RightArr />
            </Link>
          </li>
          <li className='icon-btn'>
            <RemoveBookButton id={props.id} />
          </li>
        </>
      )}
    </Book>
  );
}
