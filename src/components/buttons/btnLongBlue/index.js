import '../index.css'

function BtnLongBlue({ onClick, btnText, className }) {

    const newClassName = 'btn-long-blue ' + className

    return (
        <>
            <button className={newClassName} onClick={onClick}>{btnText}</button>
        </>
    )
}

export default BtnLongBlue
