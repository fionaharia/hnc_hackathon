import './App.css'
import {Routes,Route, } from 'react-router-dom'
import { LanguagePage } from './pages/LanguagePage'
import { HomePage } from './pages/HomePage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LanguagePage />} />
        <Route path="/home" element={<HomePage />} />

      </Routes>
    </>
  )
}

export default App
