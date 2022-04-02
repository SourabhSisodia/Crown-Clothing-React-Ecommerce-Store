import React, { useEffect, useState } from "react";
import SignInSignUp from "./pages/sign-in-and-sign-up/SignInSignUp";
import Homepage from "./pages/homepage/homepage";
import "./main.css";
import Shop from "./pages/shop/shop";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import { auth, createUserProfileDocument } from "./firebase/Firebase";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

function App() {
  const currentUser = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          dispatch({
            type: "SET_CURRENT_USER",
            currentUser: { id: snapShot.id, ...snapShot.data() },
          });
        });
      }

      dispatch({
        type: "SET_CURRENT_USER",
        currentUser: userAuth,
      });
    });

    return unsubscribeFromAuth;
  }, []);

  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="shop" element={<Shop />} />
        <Route
          path="signin"
          element={currentUser ? <Navigate to="/" /> : <SignInSignUp />}
        />
      </Routes>
    </div>
  );
}

export default App;
