import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Navbar from "./components/layout/navbar/Navbar";
import Mycontent from "./components/layout/content/Content";
import Footer from "./components/layout/footer/Footer";

function App() {
  return (
    <>
      <Navbar htitle1="Brian" htitle2="Stevan" htitle3="Iman" htitle4="Crack" />
      <Mycontent />
      <Footer title1="Marcel" title2="Merlin" title3="Julian" title4="Juri" />
    </>
  );
}

export default App;
