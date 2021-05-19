import './index.css'
import MailIcon from '../../icons/mail.png'
import BtnLongBlue from '../btnLongBlue'
import { ContextProvider } from '../modalAuth'
import { useContext } from 'react'

function ModalSignUpOtpEmail() {

    const contextObject = useContext(ContextProvider)
    const emailAccount = contextObject.accountInputFieldVal
    const signUp = contextObject.signUp
    const handleModalTraverse = contextObject.handleModalTraverse


    return (
        <>
            <div className="inner-modal-content">
                <div className="signup-otp-email-confirm-msg">
                    <p>驗證信已發送到</p>
                    <p>{emailAccount}</p>
                </div>

                <img className="mail-icon"  src={MailIcon} />

                <BtnLongBlue className="signup-otp-email-btn-long-blue" onClick={handleModalTraverse} btnText="回到登入" />

            </div>
        </>
    )
}

export default ModalSignUpOtpEmail
