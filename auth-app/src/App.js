import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import AuthContext from "./store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<HomePage />}></Route>
        {!authCtx.isLoggenIn && <Route path="/auth" element={<AuthPage />}></Route>}
        {authCtx.isLoggenIn && (
          <Route path="/profile" element={<UserProfile />}></Route>
        )}
        <Route path='/*' element={<Navigate replace to='/' />} />
      </Routes>
    </Layout>
  );
}

export default App;
