import { BookForm } from './BookForm/BookForm';
// import React, { useEffect, useState } from 'react';
import { BookList } from './BookList/BookList';
import { BookFilter } from './BookFilter/BookFilter';

export function App() {
  return (
    <>
      <BookForm />
      <BookFilter />
      <BookList />
    </>
  );
}
