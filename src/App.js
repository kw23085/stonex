import { useState } from 'react'
import BtnLogin from './components/buttons/btnLogin'
import BtnRegister from './components/buttons/btnRegister'
import ModalAuth from './components/modalAuth'
import BtnSellGem from './components/buttons/btnSellGem'
import BtnCircleEmail from './components/buttons/btnCircleEmail'
import BtnCircleHeart from './components/buttons/btnCircleHeart'
import BtnUserAvatar from './components/buttons/btnUserAvatar'
import { useGoogleLogin } from 'react-google-login'


const clientId = '854380704827-5apghi4e463dph5hs6m2i3hdr6s8b5ra.apps.googleusercontent.com'


function App() {

  // Outh modal isOpen?
  let [isOpen, setIsOpen] = useState(false)

  let openModal = () => setIsOpen(true)

  let closeModal = () => setIsOpen(false)

  // User signed in?
  let [isSignedIn, setIsSignedIn] = useState(false)

  // User avatar image
  let [userAvatarImg, SetUserAvatarImg] = useState('')
  let [userFirstName, SetUserFirstName] = useState('正威')
  let [userLastName, SetUserLastName] = useState('王')



  // Google oauth
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj) 
    closeModal()
    SetUserAvatarImg(res.profileObj.imageUrl)
    setIsSignedIn(true)
    SetUserFirstName(res.profileObj.givenName)
    SetUserLastName(res.profileObj.familyName)
  }

  const onFailure= (res) => {
      console.log('Login failed: res:', res)
  }

  const { signIn } = useGoogleLogin({
      onSuccess,
      onFailure,
      clientId,
      isSignedIn: false,
      accessType: 'offline'
  })

  // Return components
  if(isSignedIn) {
    
    return (
      <>
        <BtnSellGem />
        <BtnCircleEmail />
        <BtnCircleHeart />
        <BtnUserAvatar userAvatarImg={userAvatarImg} userFirstName={userFirstName} userLastName={userLastName}/>
      </>
    )
  } else {

    return (
      <>
        <BtnLogin />
        <BtnRegister openModal={openModal} closeModal={closeModal}/>
        <ModalAuth open={isOpen} closeModal={closeModal} signIn={signIn}/>
      </>
    )

  }

}

export default App;
