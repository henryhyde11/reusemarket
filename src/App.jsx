import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";

import { Home } from "./pages/Home";
import { Women } from "./pages/Women";
import { Men } from "./pages/Men";
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
        <Route path="/men" element={<Men/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
        {/* <Route path="/kids" element={<Clothe/>}/> */}
        <Route path="/we" element={<We/>}/>
        <Route path="/cart" element={<Car/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  );
}
