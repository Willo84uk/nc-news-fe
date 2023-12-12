import './App.css'
import Body from './components/Body'
import Header from './components/Header'
import Navbar from './components/Navbar'
import { UserProvider } from './components/UserContext'

function App() {

  return (
    <>
    <UserProvider>
      <Header />
      <Navbar />
      <Body />
    </UserProvider>
    </>
  )
}

export default App
