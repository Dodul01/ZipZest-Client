import { NavLink } from 'react-router-dom';
import { RiMenu3Fill } from 'react-icons/ri';
import { useState } from 'react';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className='flex item-center justify-between shadow-lg bg-[#232228] max-w-7xl mx-auto lg:px-10 lg:py-3 lg:rounded-b-[50px] p-2'>
      <div className='flex items-center justify-center'>
        <img className='h-[40px] mr-2' src="https://i.ibb.co/1v0K1Wd/icons8-hamburger-64.png" alt="logo" />
        <h2 className='text-2xl font-bold text-[#FA5528]'>ZipZest</h2>
      </div>
      <div className='lg:flex items-center justify-center text-white hidden'>
        <NavLink className='px-2' to='/'>Home</NavLink>
        <NavLink className='px-2' to='/addProduct'>Add Product</NavLink>
        <NavLink className='px-2' to='/myCart'>My Cart</NavLink>
        <NavLink className='px-2' to='/private'>Private Route</NavLink>
        <NavLink className='px-2' to='/private'>Private Route 2</NavLink>
      </div>
      {/* Mobile Menu */}
      <div className={`lg:hidden visible text-white flex flex-col absolute myEffect left-[-2px] ${isMenuOpen ? 'top-14': 'top-[-400px]'} p-2 w-full bg-[#232228]`}>
        <NavLink className='px-2' to='/'>Home</NavLink>
        <NavLink className='px-2' to='/addProduct'>Add Product</NavLink>
        <NavLink className='px-2' to='/myCart'>My Cart</NavLink>
        <NavLink className='px-2' to='/private'>Private Route</NavLink>
        <NavLink className='px-2' to='/private'>Private Route 2</NavLink>
      </div>
      {/* Mobile Menu */}
      <div className='flex gap-4'>
        <button className='bg-[#FA5528] px-4 py-2 rounded-lg text-lg text-white font-semibold'>Sign Up</button>
        <button onClick={()=>setIsMenuOpen(!isMenuOpen)} className='border border-solid border-[#FA6400] rounded-lg px-2 lg:hidden visible'>
          <RiMenu3Fill color='#FA6400'></RiMenu3Fill>
        </button>
      </div>
    </nav>
  )
}

export default Nav
