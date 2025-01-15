import { useParams, Outlet, NavLink } from "react-router-dom";
import { getDiploma } from "../api";
export default function Diploma() {
    const { dipId } = useParams();
    const diploma = getDiploma(dipId);
    return (
        <div>
        <h1>{diploma.name} Diploma</h1>
        <ul className="session-list">
            {diploma.modules.map((module) => (
            <li className="session" key={module.id}>
                <NavLink
                to={module.id}
                className={({ isActive }) => (isActive ? "session-active" : null)}
                >
                <p className="session-name">
                    {module.id} | {module.name}
                </p>
                </NavLink>
            </li>
            ))}
        </ul>
        <Outlet />
        </div>
    );
    }
