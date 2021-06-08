import Header from './components/header'
import UserDashBoard from './components/userDashBoard'
import { ModalAuthProvider } from './ContextAPI/contextModalAuth'

function App() {
  
  return (
    <>
      <ModalAuthProvider>
        <Header />
        <UserDashBoard />
      </ModalAuthProvider>
    </>
  )

}

export default App;