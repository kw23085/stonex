import InputField from '../../inputField'
import BtnLongBlue from '../../buttons/btnLongBlue'
import { useModalAuthContext } from '../../../ContextAPI/contextModalAuth'

function ModalForgotPw() {

    const { handleModalTraverse } = useModalAuthContext()

    return (
        <div className="inner-modal-content">
            <div className="forgot-password-msg">
                <p>請輸入您的手機號碼或Email</p>
            </div>
            <InputField className="phone-email forgot-password-phone-email" type="text" placeholder="電話號碼/ Email"/>
            <BtnLongBlue className="forgot-password-btn-next" onClick={handleModalTraverse} btnText="下一步"/>
        </div>
    )
}

export default ModalForgotPw
