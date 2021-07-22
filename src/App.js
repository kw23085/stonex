import Header from './components/header'
import UserDashBoard from './components/userDashBoard'
import Api from './components/api'
import { ModalAuthProvider } from './ContextAPI/contextModalAuth'

function App() {
  
  return (
    <>
      <ModalAuthProvider>
        <Header />
        <UserDashBoard />
        {/* <Api /> */}
      </ModalAuthProvider>
    </>
  )

}

export default App;