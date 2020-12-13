import React from 'react'
import molecule from '../assets/molecule.svg'
import { FaAlignRight } from 'react-icons/fa'
import PageLinks from '../constants/links'
const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={molecule} alt='molecule' width="50" height="50" />
          <button type='button' className='toggle-btn' onClick={toggleSidebar}>
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks styleClass='nav-links'></PageLinks>
      </div>
    </nav>
  )
}

export default Navbar
