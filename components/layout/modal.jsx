import { IoIosClose } from 'react-icons/io';
export default function Modal({ isOpen, closeModal, children }) {
  if (isOpen) {
    return (
      <>
        <div className='modal'>
          <div className='modal-background' onClick={closeModal}></div>
          <div className='modal-content'>
            {/* <button className='modal-button--close' onClick={closeModal}>
              <IoIosClose />
            </button> */}
            {children}
            <button></button>
          </div>
        </div>
      </>
    );
  }
}
