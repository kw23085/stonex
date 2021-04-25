import './index.css';

function BtnNext({ handleNext }) {
    return (
        <>
            <button className="btn-next" onClick={handleNext}>下一步</button>
        </>
    )
}

export default BtnNext
