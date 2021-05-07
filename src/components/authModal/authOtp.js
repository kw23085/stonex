import './index.css'
import InputOtp from '../inputOtp'
import { useState, useRef, useEffect } from 'react'

const INTEGER = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

function AuthOtp({ handleNext }) {
    console.log('render')

    const [inputArr, setInputArr] = useState([null, null, null, null])
    const [currentInputIndex, setCurrentInputIndex] = useState(0)

    const inputRef0 = useRef()
    const inputRef1 = useRef()
    const inputRef2 = useRef()
    const inputRef3 = useRef()

    let currentInputRefArrIndex = useRef(0)


    const inputRefArr = [inputRef0, inputRef1, inputRef2, inputRef3]

    // Update inputArr
    function updateInputArr(e) {
        
        let key = e.key
        let id = e.target.id

        if(id === 'otp0') { 
            currentInputRefArrIndex = 0
            setCurrentInputIndex(0)
        } else if(id === 'otp1') {
            currentInputRefArrIndex = 1
            setCurrentInputIndex(1)
        } else if(id === 'otp2') {
            currentInputRefArrIndex = 2
            setCurrentInputIndex(2)
        } else {
            currentInputRefArrIndex = 3
            setCurrentInputIndex(3)
        }

        if(INTEGER.includes(parseInt(key))) {

            let digit = parseInt(key)
            
            let inputArrCopy = [...inputArr]
            inputArrCopy[currentInputRefArrIndex] = digit
            setInputArr(inputArrCopy)


        } else if(key === 'Backspace') {

            let inputArrCopy = [...inputArr]
            inputArrCopy[currentInputRefArrIndex] = null
            setInputArr(inputArrCopy)

        }


    }

    useEffect(() => {

        // Check if all inputfield is empty
        let isInputArrNull = inputArr.every((el, i, arr) => el === null) ? true : false

        // Set input values
        let prevInputVal = inputArr[(currentInputIndex - 1)]
        let currentInputVal = inputArr[currentInputIndex]
        let nextInputVal = inputArr[(currentInputIndex + 1)]

        // Set input field
        let prevInputField = inputRefArr[(currentInputIndex - 1)] ? inputRefArr[(currentInputIndex - 1)].current : undefined
        let currentInputField = inputRefArr[currentInputIndex].current
        let nextInputField = inputRefArr[(currentInputIndex + 1)] ? inputRefArr[(currentInputIndex + 1)].current : undefined


        inputArr.forEach((input, index) => {
            // Show number in input field
            inputRefArr[index].current.childNodes[0].innerText = input
        })

        console.log(isInputArrNull)

        // Handle inputfield focus
        if(isInputArrNull) {
            inputRef0.current.focus()
        } else if(currentInputVal !== null) {
            currentInputField.classList.add('fill')
            if(nextInputField !== undefined) {
                nextInputField.focus()
            }
        } else if(currentInputVal === null) {
            currentInputField.classList.remove('fill')
            if(prevInputField !== undefined) {
                prevInputField.focus()
            }
        }

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
