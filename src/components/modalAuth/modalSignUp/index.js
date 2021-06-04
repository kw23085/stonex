import InputField from '../../inputField'
import BtnGoogle from '../../buttons/btnGoogle'
import BtnFacebook from '../../buttons/btnFacebook'
import BtnLongBlue from '../../buttons/btnLongBlue'
import { useModalAuthContext } from '../../../ContextAPI/contextModalAuth'

function ModalSignUp() {

    const { handleModalTraverse, accountInputFieldVal, updateInputFieldVal } = useModalAuthContext()
    
    return (
        <div className="inner-modal-content">
            <InputField className="phone-email signup-modal-phone-email" type="text" placeholder="電話號碼/ Email" onChange={updateInputFieldVal} value={accountInputFieldVal}/>
            <BtnLongBlue className="btn-next-signup" onClick={handleModalTraverse} btnText="下一步"/>
            <h2 className="horizontal-line"><span className="horizontal-line-text">或</span></h2>
            <div className="modal-social-btns">
                <BtnGoogle />
                <BtnFacebook />
            </div>
            <div className="already-acc">
                <p id="already-acc-txt">已經有帳號了嗎?</p><p className="modal-link login-link" onClick={handleModalTraverse}>登入</p>
            </div>
        </div>
    )
}

export default ModalSignUp
