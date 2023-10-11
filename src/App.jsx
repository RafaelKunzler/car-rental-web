import './App.css'

import { BrowserRouter, Routes, Route} from 'react-router-dom';


import Navbar from './components/Navbar'
import Home from './pages/Home';
import About from './pages/About';
import Models from './pages/Models';
import Testimonials from './pages/Testimonials';
import Team from './pages/Team';
import Contact from './pages/Contact';



function App() {  

  return (
    <div className=''>             
      <BrowserRouter>        
        <Navbar />         
        <div >
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
      <div className='-z-10 absolute right-0 top-0 hidden lg:block' >
          <img src="/main-bg.png" alt="" />
      </div>    
      
    </div>
  )
}

export default App
