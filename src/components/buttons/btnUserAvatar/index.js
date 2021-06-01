function BtnUserAvatar({ userAvatarImg, userFirstName, userLastName }) {

    const REGEX_CHINESE = /[\u4e00-\u9fff]|[\u3400-\u4dbf]|[\u{20000}-\u{2a6df}]|[\u{2a700}-\u{2b73f}]|[\u{2b740}-\u{2b81f}]|[\u{2b820}-\u{2ceaf}]|[\uf900-\ufaff]|[\u3300-\u33ff]|[\ufe30-\ufe4f]|[\uf900-\ufaff]|[\u{2f800}-\u{2fa1f}]/u;

    const fullName = userFirstName + userLastName
    let userInitial

    if(REGEX_CHINESE.test(fullName)) {

        userInitial = userLastName.charAt(0)

    } else {

        userInitial = ((userFirstName.charAt(0)) + (userLastName.charAt(0)))
        
    }

    if(userAvatarImg) {

        return (
            <>
                <button className="btn btn-user-avatar">
                    <img className="img-user-avatar" src={userAvatarImg} />
                </button>
            </>
        )

    } else {
        
        return (
            <>
                <button className="btn btn-user-avatar">
                    <span className="initial-user-avatar">{userInitial}</span>
                </button>
            </>
        )

    }

}

export default BtnUserAvatar