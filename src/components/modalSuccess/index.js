import './index.css'
import { useContext } from 'react'
import { ContextProvider } from '../modalAuth'
import InputField from '../inputField'
import BtnLongBlue from '../btnLongBlue'

function AuthSucess() {

    const contextObject = useContext(ContextProvider)
    const handleModalTraverse = contextObject.handleModalTraverse

    return (
        <>
            <div className="inner-modal-content">

                <div className="last-step-text-wrapper">
                    <p className="last-step-txt">最後一步, 即將成為會員！</p>
                </div>

                <InputField type="text" className="user-nickname" placeholder="暱稱"  />
                <InputField type="text" className="user-password" placeholder="密碼"  />
                <InputField type="text" className="user-password-confirm" placeholder="再次輸入密碼"  />

                <div className="terms-wrapper">
                <p className="terms-text">選擇下方的同意並完成, 即表示我同意StoneX的<span className="modal-link">服務條款</span>, <span className="modal-link">支付服務條款</span>, <span className="modal-link">隱私政策</span>。</p>
                </div>

                <BtnLongBlue className="auth-success-agree-btn" btnText="同意並完成" onClick={handleModalTraverse} />

            </div>
        </>
    )
}

export default AuthSucess
