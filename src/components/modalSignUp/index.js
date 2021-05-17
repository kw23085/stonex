import './index.css'
import { ContextProvider } from '../modalAuth'
import { useContext } from 'react'
import InputField from '../inputField'
import BtnGoogle from '../btnGoogle'
import BtnFacebook from '../btnFacebook'
import BtnLongBlue from '../btnLongBlue'


function ModalSignUp({ login }) {

    const contextObject = useContext(ContextProvider)
    const nextBtnFunc = contextObject.nextBtnFunc
    const accountInputFieldVal = contextObject.accountInputFieldVal
    const updateInputFieldVal = contextObject.updateInputFieldVal
    
    return (
        <div className="inner-modal-content">
            <InputField className="signup-modal-phone-email" type="text" placeholder="電話號碼/ Email" onChange={updateInputFieldVal} value={accountInputFieldVal}/>
            <BtnLongBlue className="btn-next-signup" onClick={nextBtnFunc} btnText="下一步"/>
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

export default ModalSignUp
