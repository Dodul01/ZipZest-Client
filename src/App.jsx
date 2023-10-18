import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './Components/Nav/Nav'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <div>
      <div className='fixed w-full top-0 z-50'>
        <Nav />
      </div>
      <div className='mt-20 z-0'>
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
