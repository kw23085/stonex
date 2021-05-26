import { useState } from 'react'
import BtnLogin from './components/buttons/btnLogin'
import BtnRegister from './components/buttons/btnRegister'
import ModalAuth from './components/modalAuth'



function App() {

  let [isOpen, setIsOpen] = useState(false);

  let [test1, setTest1] = useState(true);

  let [test2, setTest2] = useState(false);

  let openModal = () => setIsOpen(true);

  let closeModal = () => setIsOpen(false);

  return (
    <>
      <BtnLogin />
      <BtnRegister openModal={openModal} closeModal={closeModal}/>
      <ModalAuth open={isOpen} closeModal={closeModal}/>
    </>
  );
}

export default App;
