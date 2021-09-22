import React from "react";
import "./App.css";
import Header from "./components/Header";
import HomeTabs from "./components/HomeTabs";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div className="app">
        <header className="app-header">
          <Header />
        </header>
        <HomeTabs />
      </div>
      <div className="icons-List">
        <Footer />
      </div>
    </div>
  );
}

export default App;
