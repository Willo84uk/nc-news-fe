import { useState } from 'react'
import './App.css'
import Body from './components/Body'
import Header from './components/Header'
import Navbar from './components/Navbar'
import { UserProvider } from './components/UserContext'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [selectedTopic, setSelectedTopic] = useState("")

  return (
    <>
    <UserProvider>
      <div className='maincontainer'>
        <Header />
        <Navbar setSelectedTopic={setSelectedTopic}/>
        <Body selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic}/>
      </div>
    </UserProvider>
    </>
  )
}

export default App
