import { NavLink, Outlet } from "react-router";

export default function Layout() {
  return <>
    <header>
      <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/products"}>Products</NavLink>
        <NavLink to={"/packages"}>Packages</NavLink>
      </nav>
    </header>
    <main>
      <Outlet />
    </main>
  </>
}
