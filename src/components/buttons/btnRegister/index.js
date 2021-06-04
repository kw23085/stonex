import '../index.css'
import { useModalAuthContext } from '../../../ContextAPI/contextModalAuth'

function BtnRegister({ openModal }) {

    const { setIsOpen } = useModalAuthContext()

    return (
        <>
            <button onClick={() => setIsOpen(true)} className="btn-register">會員註冊</button>
        </>
    )
}

export default BtnRegister