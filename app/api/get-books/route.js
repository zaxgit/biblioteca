import { NextResponse } from 'next/server';

export async function GET(req) {
  const KEY = process.env.BOOKS_API_KEY;
  const { searchParams } = new URL(req.url);

  const query = searchParams.get('q');

  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${KEY}`
  );

  const foundBooks = await res.json();
  return NextResponse.json(foundBooks);
}
