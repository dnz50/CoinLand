import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginForm from './pages/Login/LoginForm'
import MainPageController from './pages/MainPage/MainPageController'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginForm/>}/>
      <Route path='/coins' element={<MainPageController/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
