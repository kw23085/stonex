import './index.css'
import UserDashLMenu from './userDashLMenu'
import { useGoogleAuthContext } from '../../ContextAPI/contextGAuth'

function UserDashBoard() {

	const { isSignedIn } = useGoogleAuthContext()


	return (
		<>
			<div className="content">
				{isSignedIn ? (
					<>
						<div className="user-dashboard-container">
							<UserDashLMenu />
						</div>
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
