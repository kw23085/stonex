import UserDashBoard from './components/userDashBoard'
import { useContext } from 'react'
import { GoogleAuthContext } from './ContextAPI/contextGAuth'

function App2() {

    const { isSignedIn } = useContext(GoogleAuthContext)

    console.log(isSignedIn + ' from app2')
    return (
        <>
        {isSignedIn ? (
            <>
                <UserDashBoard />
            </>
        ) : (
            <>
                <p>no user bro</p>
            </>
        )}
        </>
    )
}

export default App2
