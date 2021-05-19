import './index.css';

function BtnRegister({ openModal }) {
    return (
        <>
            <button onClick={openModal} className="btn-register">會員註冊</button>
        </>
    )
}

export default BtnRegister