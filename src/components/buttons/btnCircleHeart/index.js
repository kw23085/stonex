import heartIcon from '../../../icons/heart.png'

function BtnCircleHeart() {
    return (
        <>
            <button className="btn btn-circle-heart">
                <img className="heart-icon" src={heartIcon} alt="heart-icon"/>
            </button>
        </>
    )
}

export default BtnCircleHeart
