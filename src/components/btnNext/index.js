import './index.css';
import { useContext } from 'react'
import { ContextProvider } from '../modalAuth'

function BtnNext({ onClick, className }) {

    // Pull nextBtnFunc from modalAuth component and set to nextBtnFunc variable
    // const contextObject = useContext(ContextProvider)
    // const nextBtnFunc = contextObject.nextBtnFunc



    return (
        <>
            <button className={'btn-next ' + className} onClick={onClick}>下一步</button>
        </>
    )
}

export default BtnNext
