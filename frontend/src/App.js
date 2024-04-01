import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages";
function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;