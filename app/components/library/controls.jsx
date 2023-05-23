'use client';
import { useState } from 'react';
import { createPortal } from 'react-dom';

import SearchAddableBooks from '../forms/searchAddableBooks';
import Modal from '../layout/modal';

export default function Controls() {
  const parent = document.getElementById('__next');

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className='controls-container'>
      <button onClick={openModal}>Search For Books!</button>
      {createPortal(
        <Modal closeModal={closeModal} isOpen={isOpen}>
          <SearchAddableBooks />
        </Modal>,
        parent
      )}
    </div>
  );
}
