import { useState, useEffect } from 'react';
import './index.css'



function AuthOtp() {

    const [valiNum, setValiNum] = useState([]);

    console.log('render')
    console.log(valiNum)

    function displayNum(e) {
       setValiNum(valiNum => [...valiNum, e.key])
    }

    // Keydown event listener
    useEffect(() => {
        
        window.addEventListener('keydown', displayNum);

        // Remove eventlistener after unmount
        return () => {
            window.removeEventListener('keydown', displayNum);
        };

    }, []);

    return (
        <>
            <div className="register-modal-content">
                <div className="otp-confirm-msg">
                    <p>您的驗證碼已透過SMS簡訊傳送至</p>
                    <p>(+886) 92200000</p>
                </div>
                <div className="otp-validation-num">
                    <span className="validation-num">1</span>
                    <span className="validation-num">2</span>
                    <span className="validation-num">3</span>
                    <span className="validation-num">4</span>
                </div>
            </div>
        </>
    )
}

export default AuthOtp
