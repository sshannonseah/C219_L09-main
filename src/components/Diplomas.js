import { getDiplomas } from "../api";
import { NavLink, Outlet } from "react-router-dom";
export default function Diplomas() {
  const diplomas = getDiplomas();
  return (
    <div className="container">
      <h1>Schools</h1>
      <ul className="categories">
        {diplomas.map((diploma) => (
          <li key={diploma.id}>
            <NavLink
              to={diploma.id}
              className={({ isActive }) => (isActive ? "nav-active" : null)}
            >
              {diploma.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
