import './App.css'
import {Routes,Route, } from 'react-router-dom'
import LanguagePage from './pages/LanguagePage';
import { HomePage } from './pages/HomePage'
import { LeaderboardPage } from './pages/LeaderboardPage'
import { ProfilePage } from './pages/ProfilePage'
import { PuzzlePage } from './pages/PuzzlePage'
import  LoginPage  from './pages/LoginPage'
import { AudioPage } from './pages/AudioPage'
import { ChatPage } from './pages/ChatPage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/profile" element={< ProfilePage/>} />
        <Route path="/language" element={<LanguagePage />} />
        <Route path="/puzzle" element={<PuzzlePage />} />
        <Route path="/audio" element={<AudioPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/puzzle" element={<PuzzlePage />} />
      </Routes>
    </>
  )
}

export default App
