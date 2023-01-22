import { useSupabaseClient } from '@supabase/auth-helpers-react';
import useBookStore from '../../../store/useBookStore';

import { IoIosRemove } from 'react-icons/io';

export default function RemoveBookButton({ id }) {
  const supabase = useSupabaseClient();

  const remove = useBookStore((state) => state.removeBook);

  const removeBook = async () => {
    await supabase.from('books').delete().eq('id', id);
    remove(id);
  };

  return (
    <button className='btn btn-primary' onClick={removeBook}>
      <IoIosRemove />
    </button>
  );
}
