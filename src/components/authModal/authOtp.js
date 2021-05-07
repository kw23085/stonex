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

    // Update inputArr
    function updateInputArr(e) {
        
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

        // Check if all inputfield is empty
        let isInputArrSame = inputArr.every((el, i, arr) => el === null) ? true : false

        inputArr.forEach((input, index) => {

            // Show number in input field
            inputRefArr[index].current.childNodes[0].innerText = input

            // Next input array item
            let nextInputArrIndex = inputArr[(index + 1)]

            // Current input array item
            let currentInputArrIndex = inputArr[index]

            // Current input field
            let currentInputField = inputRefArr[index].current

            // Next input field
            let nextInputField = inputRefArr[(index + 1)] ? inputRefArr[(index + 1)].current : undefined

            let currentInputFieldText = inputRefArr[index].current.childNodes[0].innerText

            // console.log(currentInputFieldText)
            // console.log(nextInputField)
            // console.log(nextInputArrIndex)
            // console.log(currentInputArrIndex)

            if(isInputArrSame) {

                inputRef0.current.focus();

            } else if(currentInputArrIndex !== null && nextInputArrIndex === null && nextInputArrIndex !== undefined) {
                
                nextInputField.focus()
                
            } else {
                console.log('no good')
            }

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

                           return  <InputOtp key={index} index={index} onKeyDownFunc={updateInputArr} currentInputRef={currentInputRef}/>
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
