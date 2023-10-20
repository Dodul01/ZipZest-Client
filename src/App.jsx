import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './Components/Nav/Nav'
import Footer from './Components/Footer/Footer'
import { Toaster } from 'react-hot-toast'
import { useContext } from 'react'
import { AppContext } from './AppContextProvider/AppContextProvider'

function App() {
  const {isDark} = useContext(AppContext);

  return (
    <div className={isDark ? "bg-black" : "bg-white"}>
      <div className={`fixed w-full top-0 z-50 ${isDark ? "bg-black" : "bg-white"}`}>
        <Nav />
      </div>
      <div className='mt-20 pt-5 z-0'>
        <Outlet />
        <Toaster></Toaster>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
