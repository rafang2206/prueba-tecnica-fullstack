import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { Toaster } from 'sonner'

function Layout() {
  return (
    <div className="bg-black min-h-screen">
      <NavBar />
      <Outlet />
      <Toaster richColors  />
    </div>
  )
}

export default Layout