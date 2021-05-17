import './index.css'
import MailIcon from '../../icons/mail.png'
import { ContextProvider } from '../modalAuth'
import { useContext } from 'react'

function ModalSignUpOtpEmail() {

    const contextObject = useContext(ContextProvider)
    const emailAccount = contextObject.accountInputFieldVal


    return (
        <>
            <div className="inner-modal-content">
                <div className="signup-otp-email-confirm-msg">
                    <p>驗證信已發送到</p>
                    <p>{emailAccount}</p>
                </div>

                <img className="mail-icon"  src={MailIcon} />


            </div>
        </>
    )
}

export default ModalSignUpOtpEmail
