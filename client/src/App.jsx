import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/home/index';
import Wallet from './pages/wallets/index';
import Register from './pages/register/index';
import Buys from './pages/buys/index'
import Layout from "./layouts/Layout";
import ConfirmBuy from "./pages/buys/confirm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/wallets" element={<Wallet />} />
          <Route path="/register" element={<Register />} />
          <Route path="/buys"  >
            <Route index element={<Buys />}/>
            <Route path="confirm" element={<ConfirmBuy />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App