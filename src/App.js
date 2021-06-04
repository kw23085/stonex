import Header from './components/header'
import { ModalAuthProvider } from './ContextAPI/contextModalAuth'

function App() {
  
  return (
    <>
      <ModalAuthProvider>
        <Header />
      </ModalAuthProvider>
    </>
  )

}

export default App;