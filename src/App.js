import { useState } from 'react';
import BtnLogin from './components/button/BtnLogin';
import BtnRegister from './components/button/BtnRegister';
import Modal from './components/modal/Modal';

function App() {

  const [show, setShow] = useState(false);

  const closeModal = () => setShow(false);

  return (
    <>
      <BtnLogin />
      <BtnRegister onClick={() => setShow(true)}/>
      <Modal show={show} closeModal={closeModal} />
    </>
  );
}

export default App;
