import "./App.css";
import React from "react";
import Header from "./components/Header";
import Routes from "./components/Routes";
import { BrowserRouter as Router } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="row">
          <Routes />
        </div>
      </Router>
    </div>
  );
}
