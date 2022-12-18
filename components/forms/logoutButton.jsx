import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';

export default function LogoutButton() {
  const supabase = useSupabaseClient();
  const user = useUser();
  async function signOut() {
    const { error } = await supabase.auth.signOut();
  }

  if (user) return <button onClick={signOut}>Logout</button>;
}
