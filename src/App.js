import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
// import HeaderComponent from "./components/HeaderComponent";
import HomeComponent from "./components/HomeComponent";
// import { Routes, Route, Link } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
          <div className="App">
              <HomeComponent/>
          </div>
        </BrowserRouter>
    );
}

export default App;
