import './index.css'
import { useState, useContext } from 'react'
import { GoogleAuthContext } from '../../ContextAPI/contextGAuth'
import BtnLogin from '../../components/buttons/btnLogin'
import BtnRegister from '../../components/buttons/btnRegister'
import BtnSellGem from '../../components/buttons/btnSellGem'
import BtnCircleEmail from '../../components/buttons/btnCircleEmail'
import BtnCircleHeart from '../../components/buttons/btnCircleHeart'
import BtnUserAvatar from '../../components/buttons/btnUserAvatar'
import ModalAuth from '../../components/modalAuth'
import logoImg from '../../icons/logo.png'
import searchIcon from '../../icons/search.png'

function Header() {

  // User signed in?
  let { isSignedIn } = useContext(GoogleAuthContext)

  // Outh modal isOpen?
  let [isOpen, setIsOpen] = useState(false)

  let openModal = () => setIsOpen(true)

  let closeModal = () => setIsOpen(false)

  return (
    <>
      <header className="header">
        <div className="logo-searchbar">
          <div className="header-logo-btn">
            <img src={logoImg} className="app-logo" alt="logo"/>
          </div>

          <div className="search-bar">
            <img src={searchIcon} className="search-icon" alt="search-icon"/>
            <input type="text" className="input search-input" placeholder="鑽石"></input>
          </div>
        </div>
        <div className="header-btn-group">
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
          </div>
      </header>
    </>
  )
}

export default Header
