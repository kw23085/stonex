import heartIcon from '../../../icons/heart.png'

function BtnCircleHeart() {
    return (
        <>
            <button className="btn btn-circle-heart">
                <img className="heart-icon" src={heartIcon} />
            </button>
        </>
    )
}

export default BtnCircleHeart
