import Layout from '../components/layout/layout';
import BookList from '../components/book/book-list';
const DEMO_BOOKS = [
  {
    id: 'uuid1',
    title: 'Eragon',
    author: 'Chirstopher Paolini',
    isOwned: true,
    type: 'paper back',
    pages: 570,
    publishedAt: new Date(2006),
  },
  {
    id: 'uuid2',
    title: 'Pirana Pants',
    author: 'Daisy Burkawits',
    isOwned: true,
    type: 'digital',
    pages: 509,
    publishedAt: new Date(2009),
  },
];

export default function Page() {
  return (
    <Layout>
      <BookList books={DEMO_BOOKS} />
    </Layout>
  );
}
