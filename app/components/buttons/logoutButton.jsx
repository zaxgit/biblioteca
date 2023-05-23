'use client';
import { useSupabase } from '../../supabase-provider';

export default function LogoutButton() {
  const { supabase } = useSupabase();

  const signOut = () => {
    supabase.auth.signOut();
  };

  return <button onClick={signOut}>Logout</button>;
}
