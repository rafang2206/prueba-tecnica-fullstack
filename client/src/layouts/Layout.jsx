import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'

function Layout() {
  return (
    <div className="bg-black min-h-screen">
      <NavBar />
      <Outlet />
    </div>
  )
}

export default Layout