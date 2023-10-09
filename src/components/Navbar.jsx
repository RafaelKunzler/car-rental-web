import { useState } from 'react';

import { NavLink } from 'react-router-dom';

import { Button } from './ui/button';

import { FaCar } from 'react-icons/fa'
import { Menu, X } from 'lucide-react';



const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const handleToggleMenu = () => {
        setIsOpen(isOpen === true ? false : true)
        
    }

  return (

    
   <div className='py-10 w-full px-8 text-xl font-bold lg:flex items-center justify-around lg:px-0'>
        <div className='flex items-center justify-between'>
            <NavLink to='/'>
                <div className='flex content-center items-center gap-5'>
                    
                        <FaCar className='text-orange-600 w-20 h-20'/>
                        <div>
                            <span className='font-black text-3xl'>CAR</span>
                            <h3 className='font-normal text-2xl'>Rental</h3>
                        </div>                                                 
                </div>       
            </NavLink> 
            {isOpen ? <X className='lg:invisible' onClick={handleToggleMenu}/> : <Menu className='lg:invisible' onClick={handleToggleMenu}/>}
            
        </div>

        <div className='hidden xl:block flex items-center py-6 lg:py-0 lg:flex-row'>

            <ul className='flex gap-8 object-left lg:flex-row flex-col lg:items-center'>
                <NavLink to='/'><li className='hover:text-orange-600 '>Home</li></NavLink>
                <NavLink to='/about'><li className='hover:text-orange-600'>About</li></NavLink>
                <NavLink to='/models'><li className='hover:text-orange-600'>Vehicle Models</li></NavLink>
                <NavLink to='/testimonials'><li className='hover:text-orange-600'>Testimonials</li></NavLink>
                <NavLink to='/team'><li className='hover:text-orange-600'>Our Team</li></NavLink>
                <NavLink to='/contact'><li className='hover:text-orange-600'>Contact</li></NavLink>  
                
                <Button className='px-11 py-8 text-2xl lg:hidden'>Login</Button>
                
            </ul>
        </div>

        {isOpen ? 
            <div className='xl:hidden flex items-center py-6 lg:py-0 lg:flex-row'>

            <ul className='flex gap-8 object-left lg:flex-row flex-col lg:items-center'>
                <NavLink to='/'><li onClick={handleToggleMenu} className='hover:text-orange-600'>Home</li></NavLink>
                <NavLink to='/about'><li onClick={handleToggleMenu} className='hover:text-orange-600'>About</li></NavLink>
                <NavLink to='/models'><li onClick={handleToggleMenu} className='hover:text-orange-600'>Vehicle Models</li></NavLink>
                <NavLink to='/testimonials'><li onClick={handleToggleMenu} className='hover:text-orange-600'>Testimonials</li></NavLink>
                <NavLink to='/team'><li onClick={handleToggleMenu} className='hover:text-orange-600'>Our Team</li></NavLink>
                <NavLink to='/contact'><li onClick={handleToggleMenu} className='hover:text-orange-600'>Contact</li></NavLink>  
                
                <Button className='px-11 py-8 text-2xl lg:hidden'>Login</Button>
                
            </ul>
        </div> :
        ''
        }        

        <div  className='flex items-center gap-5 '>
            <Button className='px-11 py-8 text-2xl hidden lg:flex'>Login</Button> 
                       
        </div>        

    </div>
  )
}

export default Navbar