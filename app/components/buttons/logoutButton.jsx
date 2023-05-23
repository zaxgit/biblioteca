'use client';
import { useSupabase } from '../../supabase-provider';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const { supabase } = useSupabase();

  const router = useRouter();

  const signOut = () => {
    supabase.auth.signOut();
    router.push('/login');
  };

  return <button onClick={signOut}>Logout</button>;
}
