import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Packages from "./pages/Packages.jsx";
import Layout from "./Layout.jsx";

export default function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/packages" element={<Packages />}/>
      </Route>
    </Routes>
  </BrowserRouter>
}
