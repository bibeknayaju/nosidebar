import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Alldata from "./components/Alldata";
import Bict from "./pages/Bict";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route element={<Alldata />} path="/" />
          <Route element={<Bict />} path="/bict" />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
