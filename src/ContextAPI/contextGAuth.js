import React, { useState } from 'react'
import { useGoogleLogin } from 'react-google-login'

const clientId = '854380704827-5apghi4e463dph5hs6m2i3hdr6s8b5ra.apps.googleusercontent.com'

export const GoogleAuthContext = React.createContext()

export function GoogleAuthProvider({ children }) {

    // User signed in?
    let [isSignedIn, setIsSignedIn] = useState(false)

    // User info
    let [userAvatarImg, SetUserAvatarImg] = useState('')
    let [userFirstName, SetUserFirstName] = useState('')
    let [userLastName, SetUserLastName] = useState('')

    // Google oauth
    const onSuccess = (res) => {
        console.log('Login Success: currentUser:', res.profileObj) 
        SetUserAvatarImg(res.profileObj.imageUrl)
        setIsSignedIn(true)
        SetUserFirstName(res.profileObj.givenName)
        SetUserLastName(res.profileObj.familyName)
    }

    const onFailure = (res) => {
        console.log('Login failed: res:', res)
    }

    const googleAuth = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
        isSignedIn: false,
        accessType: 'offline'
    })

    const values = {
        isSignedIn,
        setIsSignedIn,
        userAvatarImg,
        userFirstName,
        userLastName,
        googleAuth
    }

    return (

        <GoogleAuthContext.Provider value={ values }>
            {children}
        </GoogleAuthContext.Provider>

    )

}



const useGoogleAuth = () => React.useContext(GoogleAuthContext)
export const { signIn } = useGoogleAuth().googleAuth

console.log(signIn)