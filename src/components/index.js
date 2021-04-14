import '../index.css'

function HeaderBtns({ onClick }) {
    return (
        <>
            <button className="login-btns login-btn">登入</button>
            <button className="login-btns register-btn" onClick={onClick}>會員註冊</button>
        </>
    )
}

export default HeaderBtns
