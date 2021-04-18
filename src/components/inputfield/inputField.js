
import './input.css';

function inputField({ type, id, placeholder }) {
    return (
        <>
            <input type={type} id={id} className="inputfield" placeholder={placeholder} />
        </>
    )
}

export default inputField
