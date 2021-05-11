import './index.css'
import InputField from '../inputField'
import BtnNext from '../btnNext'
import BtnGoogle from '../btnGoogle'
import BtnFacebook from '../btnFacebook'


function ModalAltLogin({ login }) {
    
    return (
        <div className="inner-modal-content">
            <InputField className="signup-modal-phone-email" type="text" placeholder="電話號碼/ Email" />
            <BtnNext handleNext={handleNext} className="btn-next-signup"/>
            <h2 className="horizontal-line"><span className="horizontal-line-text">或</span></h2>
            <div className="modal-social-btns">
                <BtnGoogle />
                <BtnFacebook />
            </div>
            <div className="already-acc">
                <p id="already-acc-txt">已經有帳號了嗎?</p><p className="modal-link signup-link" onClick={login}>登入</p>
            </div>
        </div>
    )
}

export default ModalAltLogin
