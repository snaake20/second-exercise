import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './routes/Login';

import './App.css'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
