import './index.css'
import InputOtp from '../inputOtp'
import { useState, useRef, useEffect } from 'react'
const INTEGER = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

function AuthOtp({ handleNext }) {
    console.log('render')

    const [inputArr, setInputArr] = useState([null, null, null, null])
    

    const inputRef0 = useRef()
    const inputRef1 = useRef()
    const inputRef2 = useRef()
    const inputRef3 = useRef()

    let currentOtpIndex = useRef(0)


    const inputRefArr = [inputRef0, inputRef1, inputRef2, inputRef3]

    function displayNum(e) {
        
        let key = e.key
        let id = e.target.id

        if(id === 'otp0') { 
            currentOtpIndex = 0
        } else if(id === 'otp1') {
            currentOtpIndex = 1
        } else if(id === 'otp2') {
            currentOtpIndex = 2
        } else {
            currentOtpIndex = 3
        }

        if(INTEGER.includes(parseInt(key))) {

            let digit = parseInt(key)
            
            let inputArrC = [...inputArr]
            inputArrC[currentOtpIndex] = digit
            setInputArr(inputArrC)


        } else if(key === 'Backspace') {

            let inputArrC = [...inputArr]
            inputArrC[currentOtpIndex] = null
            setInputArr(inputArrC)

        }


    }

    useEffect(() => {

        inputArr.forEach((input, index) => {

            // Get next input wrapper
            let nextInputBox = inputArr[(index + 1)]

            // Get current input wrapper
            let currentInputBox = inputArr[index]

            // Show number on modal
            inputRefArr[index].current.childNodes[0].innerText = input

            console.log(nextInputBox)
            console.log(currentInputBox)

            if(nextInputBox === undefined ) {
                console.log('good')
            } else {
                console.log('no good')
            }

            // nextInputBox.focus()

        })


    }, [inputArr])

    return (
        <>
            <div className="register-modal-content">
                <div className="otp-confirm-msg">
                    <p>您的驗證碼已透過SMS簡訊傳送至</p>
                    <p>(+886) 92200000</p>
                </div>
                <div className="otp-validation-num">
                    {
                        inputArr.map((input, index) => {

                            let currentInputRef = inputRefArr[index]

                           return  <InputOtp key={index} index={index} onKeyDownFunc={displayNum} currentInputRef={currentInputRef}/>
                        })
                    }
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
