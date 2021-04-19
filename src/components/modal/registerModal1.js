import InputField from '../inputfield/inputField';
import BtnNext from '../button/btnNext';
import BtnGoogle from '../button/btnGoogle';
import BtnFacebook from '../button/btnFacebook';

function registerModal1() {

    const inputInfo = {
        placeholder: "電話號碼/ Email",
        type: "text",
        id: "register-input-phone-account"
    }

    return (
        <div className="register-modal-content-1">
            <InputField placeholder={inputInfo.placeholder} type={inputInfo.type} id={inputInfo.id}/>
            <BtnNext />
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

export default registerModal1
