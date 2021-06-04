import MailIcon from '../../../icons/mail.png'
import BtnLongBlue from '../../buttons/btnLongBlue'
import { useModalAuthContext } from '../../../ContextAPI/contextModalAuth'

function ModalSignUpOtpEmail() {

    const { accountInputFieldVal, handleModalTraverse } = useModalAuthContext()

    return (
        <>
            <div className="inner-modal-content">
                <div className="signup-otp-email-confirm-msg">
                    <p>驗證信已發送到</p>
                    <p>{accountInputFieldVal}</p>
                </div>

                <img className="mail-icon"  src={MailIcon} alt="mail-icon" />

                <BtnLongBlue className="signup-otp-email-btn-long-blue" onClick={handleModalTraverse} btnText="回到登入" />

            </div>
        </>
    )
}

export default ModalSignUpOtpEmail
