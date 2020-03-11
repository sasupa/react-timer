import React from "react";
import Header from "./components/Header/Header";
import Table from "./components/RenderTable/RenderTable";
import "./App.css";
import Timer from "./containers/Timer";

function App() {
  return (
  <div>
    <Header />
    <Timer />
  </div>
)}

export default App;
