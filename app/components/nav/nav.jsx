import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { headers, cookies } from 'next/headers';

import Link from 'next/link';
import MenuDropdown from './menuDropdown';

export default async function Nav() {
  const supabase = createServerComponentSupabaseClient({ headers, cookies });

  const { data, error } = await supabase.auth.getSession();

  return (
    <div className='nav-container'>
      <nav className='nav'>
        <ul>
          {!data.session?.user ? (
            <li>
              <Link href='/login'>Login</Link>
            </li>
          ) : (
            <li>
              <Link href='/library'>Library</Link>
            </li>
          )}
          <li>
            <MenuDropdown />
          </li>
        </ul>
      </nav>
    </div>
  );
}
