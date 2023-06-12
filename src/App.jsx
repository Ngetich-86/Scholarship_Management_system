import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import Nav from './Components/Navbar/Nav'
import About from './Components/About/About'
import Reg from './Components/Register/Reg'
import Log from './Components/Login/Log'
import Footer from './Components/Footer/Footer'
import Admin from './Components/Admin/Admin'


function App() {
  return (
    <>
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/About' element= {<About/>}/>
        <Route path='/Reg' element= {<Reg/>}/>
        <Route path='/Log' element= {<Log/>}/>
        <Route path='/Admin' element= {<Admin/>}/>

      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
