import { Link } from "react-router-dom"

function NavBar() {
  return (
    <nav className="mx-auto p-4">
      <ul className="flex gap-8 justify-center items-center text-white">
        <li className="hover:text-gray-400">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-gray-400">
          <Link to="/register">Register</Link>
        </li>
        <li className="hover:text-gray-400">
          <Link to="/wallets">Wallet</Link>
        </li>
        <li className="hover:text-gray-400">
          <Link to="/buys">Comprar</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar