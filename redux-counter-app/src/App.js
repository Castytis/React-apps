import React from "react";
import Auth from "./components/Auth";
import Counter from "./components/Counter";
import Header from "./components/Header";
import {useSelector } from "react-redux";
import UserProfile from "./components/UserProfile";

function App() {

  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <React.Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </React.Fragment>
  );
}

export default App;
