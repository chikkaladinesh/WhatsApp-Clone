import React from "react";
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <Router>
      <Routes>
    <div className="app">
      <div className="appBody">
      <Sidebar />

      <Route exact path="/">
        <Chat />
        </Route>
        <Route exact path="/rooms/:roomId">
        <Chat />
        </Route>
      </div>
    </div>
      </Routes>
    </Router>
  );
}

export default App