import Link from 'next/link';

import { ImLibrary } from 'react-icons/im';
import { MdLibraryAdd } from 'react-icons/md';
import { IoMdListBox } from 'react-icons/io';

export default function MobileNav() {
  return (
    <ul className='mobile-footer'>
      <li>
        <Link href='/'>
          <ImLibrary />
        </Link>
      </li>
      <li>
        <Link href='/wishlist'>
          <IoMdListBox />
        </Link>
      </li>
      <li>
        <Link href='/add-book'>
          <MdLibraryAdd />
        </Link>
      </li>
    </ul>
  );
}
