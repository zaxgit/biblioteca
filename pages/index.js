import Head from 'next/head';

import { useUser } from '@supabase/auth-helpers-react';

import Auth from '../components/forms/auth';
import Layout from '../components/layout/layout';
import Library from '../components/library/library';

export default function Home() {
  const user = useUser();

  return (
    <>
      <Head>
        <title>Biblioteca</title>
        <meta name='description' content='Your library app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>{!user ? <Auth /> : <Library />}</Layout>
    </>
  );
}
