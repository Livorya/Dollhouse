import { NavLink, Outlet } from "react-router";

export default function Layout() {
  return <>
    <header>
      <nav>
        <NavLink to={"/"}>Home</NavLink>
      </nav>
    </header>
    <main>
      <Outlet />
    </main>
  </>
}
