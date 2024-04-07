import './App.css'
import {Routes,Route, } from 'react-router-dom'
import LanguagePage from './pages/LanguagePage';
import { HomePage } from './pages/HomePage'
import  LeaderboardPage  from './pages/LeaderboardPage'
import { ProfilePage } from './pages/ProfilePage'
import { PuzzlePage } from './pages/PuzzlePage'
import  LoginPage  from './pages/LoginPage'
import { AudioPage } from './pages/AudioPage'
import { ChatPage } from './pages/ChatPage'
import QuizPage from './pages/QuizPage';
import SignupPage from './pages/SignUpPage';
import LandingPage from './pages/LandingPage';

function App() {

  return (
    <>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/language" element={<LanguagePage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<LandingPage/>} />
      </Routes>
    </>
  )
}

export default App
