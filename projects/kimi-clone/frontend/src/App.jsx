import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Chat from './pages/Chat'

function App() {
  const [user, setUser] = useState(null)

  return (
    <div className="min-h-screen bg-kimi-darker">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/chat" element={<Chat user={user} />} />
      </Routes>
    </div>
  )
}

export default App
