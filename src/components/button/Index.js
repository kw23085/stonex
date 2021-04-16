import BtnLogin from './btnLogin';
import BtnRegister from './btnRegister';

function Buttons({ onClick }) {

    return (
        <>
            <BtnLogin />
            <BtnRegister onClick={onClick}/>
        </>
    )
}

export default Buttons