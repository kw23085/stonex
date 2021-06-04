import React, { useState, useMemo, useContext } from 'react'
import { useGoogleLogin } from 'react-google-login'

const clientId = process.env.REACT_APP_G_AUTH_CLIENTID

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

    const providerValues = useMemo(() => (
        {
            isSignedIn,
            setIsSignedIn,
            userAvatarImg,
            userFirstName,
            userLastName,
            googleAuth
        }
    ), [isSignedIn, setIsSignedIn, userAvatarImg, userFirstName, userLastName, googleAuth])

    return (

        <GoogleAuthContext.Provider value={ providerValues }>
            {children}
        </GoogleAuthContext.Provider>

    )

}

export const useGoogleAuthContext = () => {
    const context = useContext(GoogleAuthContext);
    return context;
};