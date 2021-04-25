import './input.css';

function InputField({ type, id, placeholder }) {

    function addBorder(e) {
        e.target.parentNode.classList.add('focus');
    }

    function removeBorder(e) {
        e.target.parentNode.classList.remove('focus');
    }

    return (
        <div className="inputfield focus" >
            <input type={type} id={id} className="inputfield-input" placeholder={placeholder} onFocus={addBorder} onBlur={removeBorder}/>
        </div>
    )

}

export default InputField
