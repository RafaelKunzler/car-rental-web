import { NavLink } from 'react-router-dom';

import { Button } from './ui/button';
import { FaCar } from 'react-icons/fa'


const Navbar = () => {
  return (
    
   <div className='flex py-10 justify-around text-xl font-bold'>
        <NavLink to='/'>
            <div className='flex content-center items-center gap-5'>
                
                    <FaCar className='text-orange-600 w-20 h-20'/>
                    <div>
                        <span className='font-black text-3xl'>CAR</span>
                        <h3 className='font-normal text-2xl'>Rental</h3>
                    </div>                                                 
            </div>       
        </NavLink> 

        <div className='flex items-center'>
            <ul className='flex gap-8'>
                <NavLink to='/'><li>Home</li></NavLink>
                <NavLink to='/about'><li>About</li></NavLink>
                <NavLink to='/models'><li>Vehicle Models</li></NavLink>
                <NavLink to='/testimonials'><li>Testimonials</li></NavLink>
                <NavLink to='/team'><li>Our Team</li></NavLink>
                <NavLink to='/contact'><li>Contact</li></NavLink>  
                
            </ul>
        </div>

        <div  className='flex content-center items-center gap-5'>
            <p>Sign In</p>
            <Button className='px-11 py-8 text-2xl'>Register</Button>
        </div>        
    </div>
  )
}

export default Navbar