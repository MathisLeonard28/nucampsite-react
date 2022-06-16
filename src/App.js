import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import "./App.css";
import CampsitesList from "./features/campsites/CampsitesList";
import { CAMPSITES } from "./app/shared/CAMPSITES";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <CampsitesList campsite={CAMPSITES[0]} />
      <Footer></Footer>
    </div>
  );
}

export default App;
