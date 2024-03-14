
import './App.css'
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import ButtonPage from './pages/ButtonPage'
import BadgePage from './pages/BadgePage'
import InputPage from './pages/InputPage'
import NoPage from './pages/NoPage'
import HomePage from './pages/HomePage';
import AsideRoute from './components/AsideRoute/AsideRoute';
import ClickMe from './pages/ClickMe';
import CheckboxPage from './pages/CheckBoxPage';
import Table from './pages/Table'
import ReactTodo from './pages/ReactTodo';
import RadioButtonPage from './pages/RadioButtonPage';
import LoaderPage from './pages/LoaderPage';
import NavbarPage from './pages/NavbarPage';

function App() {

  return (
  <BrowserRouter>
  <div className='flex gap-[30px]'>
  <AsideRoute/>
    <Routes>
      <Route path='/'         element={<HomePage/>}     />
      <Route path='/button'   element={<ButtonPage/>}   />
      <Route path='/input'    element={<InputPage/>}    />
      <Route path='/badge'    element={<BadgePage/>}    />
      <Route path='/checkbox' element={<CheckboxPage/>} />
      <Route path='/clickme'  element={<ClickMe/>}      />
      <Route path='/table'    element={<Table/>}        />
      <Route path='/todo'     element={<ReactTodo/>}    />
      <Route path='/radio'    element={<RadioButtonPage/>}/>
      <Route path='/loader'   element={<LoaderPage/>}/>
      <Route path='/navbar'   element={<NavbarPage/>}/>
      <Route path='*'         element={<NoPage/>}       />
    </Routes>
    </div>
    </BrowserRouter> 
  )
}

export default App
