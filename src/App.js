import React, { useEffect, useState } from "react";
import SignInSignUp from "./pages/sign-in-and-sign-up/SignInSignUp";
import Homepage from "./pages/homepage/homepage";
import "./main.css";
import Shop from "./pages/shop/shop";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import { auth, createUserProfileDocument } from "./firebase/Firebase";

function App() {
  const [currentUser, setcurrentUser] = useState(null);
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          console.log(snapShot.id);
          setcurrentUser({ id: snapShot.id, ...snapShot.data() });
        });
      }

      setcurrentUser(userAuth);
    });

    return unsubscribeFromAuth;
  }, []);

  return (
    <div>
      <Header currentUser={currentUser}></Header>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signin" element={<SignInSignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
