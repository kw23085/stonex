  
import { useState, useContext } from 'react'
import BtnLogin from './components/buttons/btnLogin'
import BtnRegister from './components/buttons/btnRegister'
import ModalAuth from './components/modalAuth'
import BtnSellGem from './components/buttons/btnSellGem'
import BtnCircleEmail from './components/buttons/btnCircleEmail'
import BtnCircleHeart from './components/buttons/btnCircleHeart'
import BtnUserAvatar from './components/buttons/btnUserAvatar'
import { GoogleContext } from './ContextAPI/contextGAuth'


function App() {

  // Outh modal isOpen?
  let [isOpen, setIsOpen] = useState(false)

  let openModal = () => setIsOpen(true)

  let closeModal = () => setIsOpen(false)

  // User signed in?
  let { isSignedIn, setIsSignedIn } = useState(false)
  
  return (

    <>
    {isSignedIn ? (
        <>
          <BtnSellGem />
          <BtnCircleEmail />
          <BtnCircleHeart />
          <BtnUserAvatar />
        </>
      ) : (
        <>
          <BtnLogin />
          <BtnRegister openModal={openModal} closeModal={closeModal}/>
          <ModalAuth open={isOpen} closeModal={closeModal} />
        </>
      )}
    </>
  )



}

export default App;