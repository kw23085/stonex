import './index.css';

function InputField({ type, id, placeholder }) {

    let customClassName = id + '-wrapper'

    return (
        <>
            <label className={'custom-field ' + customClassName}>
                <input type={type} id={id} className="input" required/>
                <span className="placeholder">{placeholder}</span>
            </label>
        </>
    )

}

export default InputField
