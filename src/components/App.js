import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Register from "./Register";
import Confirmation from "./Confirmation";
import Diplomas from "./Diplomas";
import Diploma from "./Diploma";
import Module from "./Module";
import Search from "./Search";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home title="Home" />} />
        <Route path="diplomas" element={<Diplomas />}>
          <Route path=":dipId" element={<Diploma />}>
            <Route path=":moduleId" element={<Module />} />
          </Route>
          <Route index element={<h3>Select a diploma from above</h3>} />
        </Route>
        <Route
          path="*"
          element={<h1 className="not-found">Page Not Found</h1>}
        />
        <Route path="register" element={<Register />} />
        <Route path="confirmed" element={<Confirmation />} />
      </Routes>

      

      <footer className="container">
        &copy;2024 |{" "}
        <a href="https://www.rp.edu.sg/schools-courses">Republic Polytechnic</a>
      </footer>
    </div>

  );
}

export default App;
