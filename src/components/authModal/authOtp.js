import './index.css'



function AuthOtp({ handleNext }) {

    console.log('render')

    function displayNum(e) {

        // Restrict inputfield length to 1
        if (e.target.value.length > 1) {
            e.target.value = e.target.value.slice(1, 2)
        }

        // Handle input focus
        if(e.target.value) {
            e.target.classList.add('fill')
            if(e.target.nextSibling) {
                e.target.nextSibling.focus()
            }
        } else if(!e.target.value) {
            e.target.classList.remove('fill')
            if(e.target.previousSibling) {
                e.target.previousSibling.focus();
            }
        }

    }

    function formatInput(e) {

        // Handle backspace
        if(e.keyCode === 8 && e.target.previousSibling && e.target.value === '') {
            e.preventDefault()
            e.target.previousSibling.focus()
        }

        // Prevent e / . / + / - in inputfiled
        let checkIfNum;
        if (e.key !== undefined) {
            // Check if it's a "e", ".", "+" or "-"
            checkIfNum = e.key === "e" || e.key === "." || e.key === "+" || e.key === "-" ;
        } else if (e.keyCode !== undefined) {
            // Check if it's a "e" (69), "." (190), "+" (187) or "-" (189)
            checkIfNum = e.keyCode === 69 || e.keyCode === 190 || e.keyCode === 187 || e.keyCode === 189;
        } return checkIfNum && e.preventDefault();

    }

    return (
        <>
            <div className="register-modal-content">
                <div className="otp-confirm-msg">
                    <p>您的驗證碼已透過SMS簡訊傳送至</p>
                    <p>(+886) 92200000</p>
                </div>
                <div className="otp-validation-num">
                    <input className="validation-num otp1" type="number" max="1" onChange={displayNum} onKeyDown={formatInput}/>
                    <input className="validation-num otp2" type="number" max="1" onChange={displayNum} onKeyDown={formatInput}/>
                    <input className="validation-num otp3" type="number" max="1" onChange={displayNum} onKeyDown={formatInput}/>
                    <input className="validation-num otp4" type="number" max="1" onChange={displayNum} onKeyDown={formatInput}/>
                </div>
                <div className="no-valinum">
                    <p className="no-valinum-txt">沒有收到驗證碼嗎?</p>
                    <p className="no-valinum-txt"><span className="modal-link re-send-valinum">重新傳送</span>或<span className="modal-link alt-register">使用不同的註冊方式</span></p>
                </div>
            </div>
        </>
    )
}

export default AuthOtp
