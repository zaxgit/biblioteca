'use client';

import { useSupabase } from '../../supabase-provider';

import { Trash } from '../../../lib/icons/icons';
export default function RemoveBookButton({ id }) {
  const { supabase } = useSupabase();

  const removeBook = async () => {
    await supabase.from('books').delete().eq('id', id);
  };

  return (
    <button className='icon-btn' onClick={removeBook}>
      <Trash />
    </button>
  );
}
