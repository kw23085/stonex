import './index.css'
import InputField from '../inputField'
import BtnNext from '../btnNext'

function authForgotPw() {
    return (
        <div className="inner-modal-content">
            <div className="forgot-password-msg">
                <p>請輸入您的手機號碼或Email</p>
            </div>
            <InputField className="forgot-password-phone-email" type="text" placeholder="電話號碼/ Email"/>
            <BtnNext className="forgot-password-btn-next"/>
        </div>
    )
}

export default authForgotPw
