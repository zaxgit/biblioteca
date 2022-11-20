export default async function addBook(req, res) {
  const KEY = process.env.BOOKS_API_KEY;
  const { query } = req;

  const getBooks = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${query.q}&key=${KEY}`
  );

  const foundBooks = await getBooks.json();

  return res.status(200).json(foundBooks);
}
