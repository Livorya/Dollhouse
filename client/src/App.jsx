import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home.jsx";
import Layout from "./Layout.jsx";

export default function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
}
