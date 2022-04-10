import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/login";
import Signup from "./Pages/Signup";
import Studentprofile from "./Pages/Studentprofile";
import Connect from "./Pages/connect";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="studentprofile" element={<Studentprofile />} />
          <Route path="connect" element={<Connect />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
