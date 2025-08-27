import './App.css'
import {NavBar} from '../src/components/NavBar'
import {Routes, Route} from 'react-router-dom'
import {Home} from './Pages/Home/index'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </>
  )
}

export default App
