import './App.css'

import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import Models from './components/Models';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Contact from './components/Contact';


function App() {  

  return (
    <>             
      <BrowserRouter>        
        <Navbar />         
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/models' element={<Models />} />
            <Route path='/testimonials' element={<Testimonials />} />
            <Route path='/team' element={<Team />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>   
      <div className='-z-10 absolute right-0 top-0' >
          <img src="./public/main-bg.png" alt="" />
      </div>    
    </>
  )
}

export default App
