import './index.css';

function btnNext({ handleNext }) {
    return (
        <>
            <button className="btn btn-solid btn-next" onClick={handleNext}>下一步</button>
        </>
    )
}

export default btnNext
