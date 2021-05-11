import './index.css'
import InputField from '../inputField';
import BtnNext from '../btnNext';
import BtnGoogle from '../btnGoogle';
import BtnFacebook from '../btnFacebook';

function authLogin({ forgotPassword }) {
    return (
        <div className="inner-modal-content">
            <InputField className="login-modal-phone-email" type="text" placeholder="電話號碼/ Email" />
            <InputField className="login-modal-password" type="text" placeholder="密碼" />
            <div className="forgot-password">
                <p className="modal-link register-link" onClick={forgotPassword}>忘記密碼 ?</p>
            </div>
            <BtnNext className="btn-next-login"/>
            <h2 className="horizontal-line-login"><span className="horizontal-line-text">或</span></h2>
            <div className="modal-social-btns">
                <BtnGoogle />
                <BtnFacebook />
            </div>
        </div>
    )
}

export default authLogin
