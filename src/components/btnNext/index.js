import './index.css';

function BtnNext({ onClick, className }) {

    return (
        <>
            <button className={'btn-next ' + className} onClick={onClick}>下一步</button>
        </>
    )
}

export default BtnNext
