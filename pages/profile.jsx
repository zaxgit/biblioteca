import Layout from '../components/layout/layout';
import Image from 'next/image';

export default function Profile({ name }) {
  return (
    <Layout>
      <div className='profile'>
        <Image className='profile-image' height='50' width='50' />
        <h2>
          <bold>Hello, </bold> {name}
        </h2>
        <h2>Stats: </h2>
        <table>
          <thead>
            <th></th>
          </thead>
        </table>
      </div>
    </Layout>
  );
}
