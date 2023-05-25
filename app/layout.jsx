import { Inter, Pacifico } from 'next/font/google';
import '../styles/main.css';
import styles from './layout.module.scss';

import SupabaseProvider from './supabase-provider';
import NavBar from './components/nav/navBar';

export const metadata = {
  title: 'Biblioteca',
  description: 'The app for your library',
};
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

const pacifico = Pacifico({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-pacifico',
});

export default function RootLayout({ children }) {
  return (
    <html className={`${inter.className} ${pacifico.className}`}>
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
