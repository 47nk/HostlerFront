import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login/log_in";
import NavigationBar from "./components/navigation_bar/navigationBar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<NavigationBar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
