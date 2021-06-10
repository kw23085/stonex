import './index.css'
import UserDashLMenu from './userDashLMenu'
import UserDashContent from './userDashContent'
import { useGoogleAuthContext } from '../../ContextAPI/contextGAuth'

function UserDashBoard() {

	const { isSignedIn } = useGoogleAuthContext()


	return (
		<>
			<div className="user-dashboard-container">
				{isSignedIn ? (
					<>
						<UserDashLMenu />
						<UserDashContent />
					</>
				) : (           
					<>
						<div className="user-dashboard-container">
							<p>no user</p>
						</div>
					</>
				)}
			</div>
		</>
	)
}

export default UserDashBoard
