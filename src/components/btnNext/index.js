import './index.css';

function BtnNext({ handleNext, className }) {
    return (
        <>
            <button className={'btn-next ' + className} onClick={handleNext}>下一步</button>
        </>
    )
}

export default BtnNext
