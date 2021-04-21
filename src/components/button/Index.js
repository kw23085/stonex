import BtnLogin from '../btnLogin';
import BtnRegister from '../btnRegister';

function Buttons({ openModal }) {

    return (
        <>
            <BtnLogin />
            <BtnRegister openModal={openModal} />
        </>
    )
}

export default Buttons