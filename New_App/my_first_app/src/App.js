import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Navbar from "./components/layout/navbar/Navbar";
import Mycontent from "./components/layout/content/Content";
import Footer from "./components/layout/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Mycontent />
      <Footer />
    </>
  );
}

export default App;
