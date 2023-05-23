import styles from './navBar.module.scss';

import Link from 'next/link';
import SearchAddableBooks from '../forms/searchAddableBooks';
import Nav from './nav';

export default function NavBar() {
  return (
    <div className={styles.navBar}>
      <Link href='/' className={styles.brand}>
        Biblioteca
      </Link>
      <SearchAddableBooks />
      <Nav />
    </div>
  );
}
