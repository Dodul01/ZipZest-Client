import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './Components/Nav/Nav'

function App() {

  return (
    <div>
      <div className='fixed w-full top-0'>
        <Nav />
      </div>
      <div className='mt-20'>
        <Outlet />
      </div>
    </div>
  )
}

export default App
