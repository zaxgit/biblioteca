import styles from './layout.module.scss';

import SupabaseProvider from './supabase-provider';
import NavBar from './components/nav/navBar';

export const metadata = {
  title: 'Biblioteca',
  description: 'The app for your library',
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <SupabaseProvider>
          <header className={styles.header}>
            <NavBar />
          </header>
          <main>{children}</main>
          <footer className='footer'></footer>
        </SupabaseProvider>
      </body>
    </html>
  );
}
