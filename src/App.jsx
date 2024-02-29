
import './App.css'
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import ButtonPage from './pages/ButtonPage'
import BadgePage from './pages/BadgePage'
import InputPage from './pages/InputPage'
import NoPage from './pages/NoPage'
import HomePage from './pages/HomePage';
import Navbar from './components/navbar/Navbar';

function App() {

  return (
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/button' element={<ButtonPage/>}/>
      <Route path='/input' element={<InputPage/>}/>
      <Route path='/badge' element={<BadgePage/>}/>
      <Route path='404' element={<NoPage/>}/>
    </Routes>
    </BrowserRouter>
 


 
  )
}

export default App
