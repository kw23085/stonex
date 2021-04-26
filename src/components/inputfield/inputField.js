import './input.css';

function InputField({ type, id, placeholder }) {

    return (
        <>
            <label className="custom-field">
                <input type={type} id={id} className="input" required/>
                <span className="placeholder">{placeholder}</span>
            </label>
        </>
    )

}

export default InputField
