import Link from 'next/link';
import LogoutButton from '../forms/logoutButton';

import { useUser } from '@supabase/auth-helpers-react';

export default function Layout({ children }) {
  const user = useUser();

  return (
    <>
      <header className='header-container'>
        <div className='header-inner'>
          <Link href='/' className='brand'>
            Biblioteca
          </Link>
          <div className='nav-container'>
            <nav className='nav'>
              <ul>
                <li>
                  {user ? (
                    <Link href='/profile'>Profile</Link>
                  ) : (
                    <Link href='/'>Login</Link>
                  )}
                </li>
                <li>
                  <LogoutButton />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className='footer'></footer>
    </>
  );
}
