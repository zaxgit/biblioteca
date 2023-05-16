import { useSupabaseClient } from '@supabase/auth-helpers-react';
import useBookStore from '../../../store/useBookStore';

import { Trash } from '../../../icons/icons';
export default function RemoveBookButton({ id }) {
  const supabase = useSupabaseClient();

  const remove = useBookStore((state) => state.removeBook);

  const removeBook = async () => {
    await supabase.from('books').delete().eq('id', id);
    remove(id);
  };

  return (
    <button className='icon-btn' onClick={removeBook}>
      <Trash />
    </button>
  );
}
