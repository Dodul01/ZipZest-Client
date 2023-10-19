import { Link, NavLink } from 'react-router-dom';
import { RiMenu3Fill } from 'react-icons/ri';
import { useContext, useState } from 'react';
import { AppContext } from '../../AppContextProvider/AppContextProvider';

const Nav = () => {
  const { user, signOutUser } = useContext(AppContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSingOut = () => {
    signOutUser()
  }


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
        <NavLink className='px-2' to='/blog'>Blog</NavLink>
        <NavLink className='px-2' to='/private'>Private Route 2</NavLink>
      </div>
      {/* Mobile Menu */}
      <div className={`lg:hidden visible text-white flex flex-col absolute myEffect left-[-2px] ${isMenuOpen ? 'top-14' : 'top-[-400px]'} p-2 w-full bg-[#232228]`}>
        {user &&
          <div className='lg:hidden visible ml-2 mb-2'>
            <div className='flex'>
              <img className='h-[50px] w-[50px] mr-1 rounded-full object-cover border-2 border-[#FA6400]' src={user?.photoURL} alt="" />
              <div>
                <h3 className='font-bold text-white'>{user?.displayName}</h3>
                <p className='font-base text-white'>{user?.email}</p>
              </div>
            </div>
          </div>
        }
        <NavLink className='px-2' to='/'>Home</NavLink>
        <NavLink className='px-2' to='/addProduct'>Add Product</NavLink>
        <NavLink className='px-2' to='/myCart'>My Cart</NavLink>
        <NavLink className='px-2' to='/blog'>Blog</NavLink>
        <NavLink className='px-2' to='/private'>Private Route 2</NavLink>
      </div>
      {/* Mobile Menu */}
      <div className='flex gap-4'>

        {user &&
          <div className='lg:flex hidden'>
            <div className='flex'>
              <img className='h-[50px] w-[50px] mr-1 rounded-full object-cover border-2 border-[#FA6400]' src={user?.photoURL} alt="" />
              <div>
                <h3 className='font-bold text-white'>{user?.displayName}</h3>
                <p className='font-base text-white'>{user?.email}</p>
              </div>
            </div>
          </div>
        }


        {
          user ?
            <button onClick={handleSingOut} className='bg-[#FA5528] px-4 py-2 rounded-lg text-lg text-white font-semibold'>Sign Out</button>
            :
            <Link to='/signUp' className='bg-[#FA5528] px-4 py-2 rounded-lg text-lg text-white font-semibold'>Sign Up</Link>
        }
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='border border-solid border-[#FA6400] rounded-lg px-2 lg:hidden visible'>
          <RiMenu3Fill color='#FA6400'></RiMenu3Fill>
        </button>
      </div>
    </nav>
  )
}

export default Nav
