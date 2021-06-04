import '../index.css'
import { useModalAuthContext } from '../../../ContextAPI/contextModalAuth'

function BtnLogin() {

    const { setStep, setIsOpen } = useModalAuthContext()

    function openLoginModal() {
        setStep('login')
        setIsOpen(true)
    }

    return (
        <>
            <button className="btn-login" onClick={openLoginModal}>登入</button>
        </>
    )
}

export default BtnLogin