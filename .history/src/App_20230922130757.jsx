import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./views/Login";
import Registro from "./views/Registro";
import NotFound from "./views/NotFound";

import Navbar from "./components/Navbar";
import Home from "./views/Home";
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
