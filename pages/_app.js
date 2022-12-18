import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
// import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { useState } from 'react';
import '../styles/main.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  // Create a new supabase browser client on every first render.
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());
  // const [queryClient] = useState(() => new QueryClient());

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      {/* <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}> */}
      <Component {...pageProps} />
      {/* </Hydrate>
      </QueryClientProvider> */}
    </SessionContextProvider>
  );
}

export default MyApp;
