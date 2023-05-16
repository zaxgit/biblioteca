import { useEffect, useRef } from 'react';
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import useProfileStore from '../store/useProfileStore';

import Layout from '../components/layout/layout';

export default function Profile() {
  const supabase = useSupabaseClient();
  const user = useUser();

  const { name, updateName } = useProfileStore();

  const nameInputRef = useRef();

  useEffect(() => {
    const loadProfileData = async () => {
      const { data } = await supabase
        .from('profiles')
        .select('name')
        .eq('user_id', user.id);
      if (data[0]) {
        updateName(data[0].name);
      }
    };

    if (user && !name) loadProfileData();
  }, [user, name]);

  const insertName = async (e) => {
    e.preventDefault();
    const { data } = await supabase
      .from('profiles')
      .insert({ user_id: user.id, name: nameInputRef.current.value })
      .select('name');
    updateName(data[0].name);
  };

  const changeName = async (e) => {
    e.preventDefault();
    const { data } = await supabase
      .from('profiles')
      .update({ name: nameInputRef.current.value })
      .eq('user_id', user.id)
      .select('name');
    updateName(data[0].name);
    nameInputRef.current.value = '';
  };

  return (
    <Layout>
      <div className='profile'>
        <h1>Welcome, </h1>
        <h2>{name}</h2>
        <h2>Stats: </h2>
        <form onSubmit={!name ? insertName : changeName}>
          <div className='input-control'>
            <label htmlFor='name' id='name'>
              Change/Add Name
            </label>
            <input type='text' placeholder='Enter Name' ref={nameInputRef} />
          </div>
        </form>
      </div>
    </Layout>
  );
}
