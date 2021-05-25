import './index.css'
import { ContextProvider } from '../index'
import { useContext } from 'react'
import InputField from '../../inputField'
import BtnGoogle from '../../buttons/btnGoogle'
import BtnFacebook from '../../buttons/btnFacebook'
import BtnLongBlue from '../../buttons/btnLongBlue'



function ModalAltLogin() {

    const contextObject = useContext(ContextProvider)
    const handleModalTraverse = contextObject.handleModalTraverse
    const updateInputFieldVal = contextObject.updateInputFieldVal
    
    return (
        <div className="inner-modal-content">
            <InputField className="signup-modal-phone-email" type="text" placeholder="電話號碼/ Email" onChange={updateInputFieldVal} />
            <BtnLongBlue className="alt-login-next-btn" onClick={handleModalTraverse} btnText="下一步"/>
            <h2 className="horizontal-line"><span className="horizontal-line-text">或</span></h2>
            <div className="modal-social-btns">
                <BtnGoogle />
                <BtnFacebook />
            </div>
            <div className="alt-login-already-acc">
                <p id="alt-login-already-acc-txt">已經有帳號了嗎?</p><p className="modal-link login-link" onClick={handleModalTraverse}>登入</p>
            </div>
        </div>
    )
}

export default ModalAltLogin
