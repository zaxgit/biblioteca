import { useUser } from '@supabase/auth-helpers-react';

export default function Home() {
  const user = useUser();

  // return !user ? <Auth /> : <Library />;
}
