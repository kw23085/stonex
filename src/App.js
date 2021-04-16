import { useState } from 'react';
import Buttons from './components/button/index';
import Modal from './components/modal/modal';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);

  return (
    <>
      <Buttons  onClick={openModal}/>
      <Modal open={isOpen}/>
    </>
  );
}

export default App;
