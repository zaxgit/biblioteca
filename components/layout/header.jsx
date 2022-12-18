import Link from 'next/link';
import LogoutButton from '../forms/logoutButton';

export default function Header() {
  return (
    <header className='header-container'>
      <div className='header-inner'>
        <div className='logo-box'>
          <img src='#' />
        </div>
        <div className='nav-container'>
          <nav className='nav'>
            <ul>
              <li>
                <Link href='/library'>Library</Link>
              </li>
              <li>
                <Link href='/wishlist'>Wishlist</Link>
              </li>
              <li>
                <Link href='/profile/[id]'>Profile</Link>
              </li>
              <li>
                <LogoutButton />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
