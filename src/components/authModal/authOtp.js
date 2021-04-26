import { useEffect } from 'react';
import './index.css'



function AuthOtp() {
    // const [valiNum, setValiNum] = useState([]);

    console.log('render')
    // console.log(valiNum)
    // console.log(valiNum.length)


    // Keydown event listener
    useEffect(() => {
        let valiNum = [];
        let numField = document.querySelector('.otp-validation-num').childNodes;

        function displayNum(e) {
            // Check if its 0-9 and less then 4 digits - push the input in array
            if(e.keyCode >= 48 && e.keyCode <= 57 && valiNum.length <= 3) {
                // setValiNum(valiNum => [...valiNum, e.key])
                valiNum.push(e.key)
                valiNum.forEach((num, index) => {
                    numField[index].classList.add('fill');
                    numField[index].firstChild.innerText = num;
                })
            } else if(e.keyCode === 8) {
                valiNum.pop();
                numField[valiNum.length].classList.remove('fill');
                numField[valiNum.length].firstChild.innerText = '';
            }
        }

        
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
                    <div className="validation-num"><span className="vali-num"></span></div>
                    <div className="validation-num"><span className="vali-num"></span></div>
                    <div className="validation-num"><span className="vali-num"></span></div>
                    <div className="validation-num"><span className="vali-num"></span></div>
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
