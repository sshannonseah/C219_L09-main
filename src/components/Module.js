import { useParams } from "react-router-dom";
    import { getModule } from "../api";
    export default function Module() {
    const { dipId, moduleId } = useParams();
    const { name, desc, lecturer } = getModule({ moduleId, dipId });
    return (
        <div>
        <h2>Module</h2>
        <ul>
            <h3>{name}</h3>
            <p>{desc}</p>
            <h4>{lecturer.name}</h4>
            <span>{lecturer.title}</span>
        </ul>
        </div>
    );
}
