import { useState } from 'react';
import Buttons from './components/button/index';
import Modal from './components/modal/modal';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  return (
    <>
      <Buttons  openModal={openModal} closeModal={closeModal}/>
      <Modal open={isOpen} closeModal={closeModal}/>
    </>
  );
}

export default App;
