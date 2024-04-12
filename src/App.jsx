
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
import ModalPage from './pages/ModalPage';
import Calculator from './pages/Calculator';
import LineBarGraphPage from './pages/LineBarGraphPage';
import ChartPage from './pages/ChartPage';
import LinechartPage from './pages/LinechartPage';
import StackBarChart from './components/StackBarChart/StackBarChart';
import CardsPage from './pages/CardsPage';
import BarFeedBackPage from './pages/BarFeedBackPage';
import AvatarPage from './pages/AvatarPage';


function App() {

  return (
  <BrowserRouter>
  <div className='flex gap-[30px] '>
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
      <Route path='/modal'   element={<ModalPage/>}/>    
      <Route path='/calculator'  element={<Calculator/>}/>
      <Route path='*'         element={<NoPage/>}       />
      <Route path='/linebargraph' element={<LineBarGraphPage/>}/>
      <Route path='/simplebarchart' element={<ChartPage/>}/>
      <Route path='/linechart' element={<LinechartPage/>}/>
      <Route path='/stackbarchart' element={<StackBarChart/>}/>
      <Route path='/cards' element={<CardsPage/>}/>
      <Route path='/FeedBackGraph' element={<BarFeedBackPage/>}/>
      <Route path='/Avatar' element={<AvatarPage/>}/>


    </Routes>
    </div>
    </BrowserRouter> 
  )
}

export default App
