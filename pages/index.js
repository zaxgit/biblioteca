import Head from 'next/head';
import Image from 'next/image';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useEffect, useState } from 'react';
// import { Auth, ThemeSupa } from '@supabase/auth-ui-react';
import Auth from '../components/forms/auth';

import MobileNav from '../components/layout/mobile/mobile-nav';
import Layout from '../components/layout/layout';

export default function Home() {
  const supabase = useSupabaseClient();
  const user = useUser();
  const [data, setData] = useState();

  // const isMobile = window.matchMedia('max-width: 767px');
  useEffect(() => {
    async function loadData() {
      const { data } = await supabase.from('test').select('*');
      setData(data);
    }
    // Only run query once user is logged in.
    if (user) loadData();
  }, [user]);

  if (!user) return <Auth />;

  return (
    <>
      <Head>
        <title>Biblioteca</title>
        <meta name='description' content='Your library app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <p>user:</p>
        <pre>{JSON.stringify(user, null, 2)}</pre>
        <p>client-side data fetching with RLS</p>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </Layout>
    </>
  );
}
