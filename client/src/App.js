import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BackendProvider } from "./contexts/backend";
import Router from "./components/Router";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Header from "./pages/Header";
import LibraryPage from "./pages/LibraryPage";
import Profile from "./pages/Profile";

function App() {
  const [token, setToken] = useState("");

  return (
    <BackendProvider>
      <Router path="/signup">
        <SignupPage setToken={setToken} />
      </Router>
      <Router path="/login">
        <LoginPage setToken={setToken} />
      </Router>
      <Router path="/resetpassword">
        <div>reset</div>
      </Router>
      <Router path="/">
        <Header />
        <LibraryPage></LibraryPage>
      </Router>
      <Router path="/profile">
        <Header />
        <Profile/>
      </Router>
    </BackendProvider>
  );
}

export default App;
