import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Login from './views/Login';
import Registro from './views/Registro'
import NotFound from './views/NotFound'

import Navbar from './components/Navbar'
function App() {

  return (
    <>
      <div>
        
      <BrowserRouter>
        <Navbar />

        <Routes>
       <Route path="/login" element={<Login />} />
       <Route path="/registro" element={<Registro />} />
       <Route path="*" element={<NotFound />} />
       </Routes>


      </BrowserRouter>

      </div>
    </>
  )
}

export default App
