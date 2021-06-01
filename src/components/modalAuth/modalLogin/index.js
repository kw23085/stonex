import { useContext } from 'react'
import { ContextProvider } from '../index'
import InputField from '../../inputField';
import BtnGoogle from '../../buttons/btnGoogle';
import BtnFacebook from '../../buttons/btnFacebook';
import BtnLongBlue from '../../buttons/btnLongBlue'


function ModalLogin({ forgotPassword }) {

    const contextObject = useContext(ContextProvider)
    const accountInputFieldVal = contextObject.accountInputFieldVal
    const passwordInputFieldVal = contextObject.passwordInputFieldVal
    const updateInputFieldVal = contextObject.updateInputFieldVal
    const handleModalTraverse = contextObject.handleModalTraverse

    const inputFieldArr = [
        {
            className: 'phone-email login-modal-phone-email',
            type: 'text',
            placeholder: '電話號碼/ Email',
            value: accountInputFieldVal
        },
        {
            className: 'login-modal-password',
            type: 'text',
            placeholder: '密碼',
            value: passwordInputFieldVal
        }
    ]




    return (
        <div className="inner-modal-content">
            {
                inputFieldArr.map((inputField) => {
                    return <InputField key={inputField.className} className={inputField.className} type="text" placeholder={inputField.placeholder} onChange={updateInputFieldVal} value={inputField.value}/>
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
