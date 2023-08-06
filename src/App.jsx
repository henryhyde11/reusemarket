import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";

import { Home } from "./pages/Home";
import { Women } from "./pages/Women";
import { Login } from "./pages/Login";
import { Car } from "./pages/Car";
import { We } from "./pages/We";
import { Detail } from "./pages/Detail";

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />}/>
        <Route path="/women" element={<Women/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
        {/* <Route path="/men" element={<Clothe/>}/> */}
        {/* <Route path="/kids" element={<Clothe/>}/> */}
        <Route path="/we" element={<We/>}/>
        <Route path="/car" element={<Car/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  );
}
