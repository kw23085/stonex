import './index.css';

function InputField({ type, id, placeholder, className}) {

    return (
        <>
            <label className={'custom-field ' + className}>
                <input type={type} id={id} className="input" required/>
                <span className="placeholder">{placeholder}</span>
            </label>
        </>
    )

}

export default InputField
