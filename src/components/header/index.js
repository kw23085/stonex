import './index.css'
import BtnLogin from '../../components/buttons/btnLogin'
import BtnRegister from '../../components/buttons/btnRegister'
import BtnSellGem from '../../components/buttons/btnSellGem'
import BtnCircleEmail from '../../components/buttons/btnCircleEmail'
import BtnCircleHeart from '../../components/buttons/btnCircleHeart'
import BtnUserAvatar from '../../components/buttons/btnUserAvatar'
import ModalAuth from '../../components/modalAuth'
import logoImg from '../../icons/logo.png'
import searchIcon from '../../icons/search.png'
import { useGoogleAuthContext } from '../../ContextAPI/contextGAuth'

function Header() {

  // User signed in?
  let { isSignedIn } = useGoogleAuthContext()

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
              <BtnRegister />
              <ModalAuth />
            </>
          )}
          </div>
      </header>
    </>
  )
}

export default Header
