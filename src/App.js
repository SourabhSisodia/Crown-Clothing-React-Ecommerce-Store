import React from "react";
import SignInSignUp from "./pages/sign-in-and-sign-up/SignInSignUp";
import Homepage from "./pages/homepage/homepage";
import "./main.css";
import Shop from "./pages/shop/shop";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signin" element={<SignInSignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
