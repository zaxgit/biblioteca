import Link from 'next/link';
import LogoutButton from '../forms/logoutButton';

import { useUser } from '@supabase/auth-helpers-react';

export default function Layout({ children }) {
  const user = useUser();

  return (
    <>
      <header className='header-container'>
        <div className='header-inner'>
          {/* <div className='logo-box'>
          <img src='#' />
        </div> */}
          <div className='nav-container'>
            <nav className='nav'>
              <ul>
                <li>
                  <Link href='/'>Library</Link>
                </li>
                {user && (
                  <li>
                    <Link href='/profile'>Profile</Link>
                  </li>
                )}
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
