import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/home/index';
import Wallet from './pages/wallets/index';
import Register from './pages/register/index';
import Buys from './pages/buys/index'
import Layout from "./layouts/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/wallets" element={<Wallet />} />
          <Route path="/register" element={<Register />} />
          <Route path="/buys" element={<Buys />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App