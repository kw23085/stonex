import InputField from '../../inputField';
import BtnGoogle from '../../buttons/btnGoogle';
import BtnFacebook from '../../buttons/btnFacebook';
import BtnLongBlue from '../../buttons/btnLongBlue'
import { useModalAuthContext } from '../../../ContextAPI/contextModalAuth'


function ModalLogin({ forgotPassword }) {

    const { accountInputFieldVal, passwordInputFieldVal, updateInputFieldVal, handleModalTraverse } = useModalAuthContext()

    const inputFieldArr = [
        {
            className: 'phone-email login-modal-phone-email',
            type: 'text',
            placeholder: '電話號碼/ Email',
            value: accountInputFieldVal,
            isPhoneEmail: true
        },
        {
            className: 'password login-modal-password',
            type: 'text',
            placeholder: '密碼',
            value: passwordInputFieldVal,
            isPhoneEmail: false
        }
    ]


    return (
        <div className="inner-modal-content">
            {
                inputFieldArr.map((inputField) => {
                    return <InputField key={inputField.className} className={inputField.className} isPhoneEmail={inputField.isPhoneEmail} type="text" placeholder={inputField.placeholder} onChange={updateInputFieldVal} value={inputField.value}/>
                })
            }
            <div className="forgot-password">
                <p className="modal-link forgot-password-link" onClick={handleModalTraverse}>忘記密碼 ?</p>
            </div>
            <BtnLongBlue className="btn-next-login" onClick={handleModalTraverse} btnText="下一步"/>
            <h2 className="horizontal-line-login"><span className="horizontal-line-text">或</span></h2>
            <div className="modal-social-btns">
                <BtnGoogle />
                <BtnFacebook />
            </div>
        </div>
    )
}

export default ModalLogin
