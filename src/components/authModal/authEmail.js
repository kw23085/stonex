import InputField from '../inputfield/inputField';
import BtnNext from '../btnNext';
import BtnGoogle from '../btnGoogle';
import BtnFacebook from '../btnFacebook';


function authEmail({ handleNext }) {

    const inputInfo = {
        placeholder: "電話號碼/ Email",
        type: "text",
        id: "register-input-phone-account"
    }
    
    return (
        <div className="register-modal-content">
            <InputField id={inputInfo.id} type={inputInfo.type} placeholder={inputInfo.placeholder} />
            <BtnNext handleNext={handleNext} />
            <h2 id="horizontal-line"><span id="horizontal-line-text">或</span></h2>
            <div className="modal-social-btns">
                <BtnGoogle />
                <BtnFacebook />
            </div>
            <div className="modal-bottom-info">
                <p id="already-acc-txt">已經有帳號了嗎?</p><p id="register-link">登入</p>
            </div>
        </div>
    )
}

export default authEmail
