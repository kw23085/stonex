import './index.css';
import { useContext } from 'react'
import { ContextProvider } from '../modalAuth'

function BtnNext({ onClick, className }) {

    const contextObject = useContext(ContextProvider)
    const nextBtnFunc = contextObject.nextBtnFunc



    return (
        <>
            <button className={'btn-next ' + className} onClick={nextBtnFunc}>下一步</button>
        </>
    )
}

export default BtnNext
