
import './App.css'
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import ButtonPage from './pages/ButtonPage'
import BadgePage from './pages/BadgePage'
import InputPage from './pages/InputPage'
import NoPage from './pages/NoPage'
import HomePage from './pages/HomePage';
import Navbar from './components/navbar/Navbar';
import AsideRoute from './components/AsideRoute/AsideRoute';
import ClickMe from './pages/ClickMe';


function App() {

  return (
  <BrowserRouter>
  <div className='flex gap-[30px]'>
  <AsideRoute/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/button' element={<ButtonPage/>}/>
      <Route path='/input' element={<InputPage/>}/>
      <Route path='/badge' element={<BadgePage/>}/>
      <Route path='*' element={<NoPage/>}/>
      <Route path='/clickme' element={<ClickMe/>}/>
    </Routes>
    </div>
    </BrowserRouter>
 


 
  )
}

export default App
