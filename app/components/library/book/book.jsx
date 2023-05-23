'use client';
import AddBookButton from '../../buttons/addBookButton';
import RemoveBookButton from '../../buttons/removeBookButton';
import { Book } from '../../../../lib/elements/book';

import Link from 'next/link';
import { RightArr } from '../../../../lib/icons/icons';

export default function HorizontalBook(props) {
  const {
    id,
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
            <Link href={`/library/${id}`}>
              <RightArr />
            </Link>
          </li>
          <li className='icon-btn'>
            <RemoveBookButton id={id} />
          </li>
        </>
      )}
    </Book>
  );
}
