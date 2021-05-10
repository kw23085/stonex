import './index.css';

function BtnAgree({ closeResetStep }) {
    return (
        <>
            <button className="btn-agree" onClick={closeResetStep}>同意並完成</button>
        </>
    )
}

export default BtnAgree
