import Head from 'next/head';
import Image from 'next/image';

import MobileNav from '../components/layout/mobile/mobile-nav';
import Footer from '../components/layout/footer';

export default function Home() {
  // const isMobile = window.matchMedia('max-width: 767px');

  return (
    <div>
      <Head>
        <title>Biblioteca</title>
        <meta name='description' content='Your library app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header></header>
      <main></main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
