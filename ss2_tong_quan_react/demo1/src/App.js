import logo from './logo.svg';
import './App.css';
import HeaderComponent from "./class_components/HeaderComponent";
import React from "react";
import FooterComponent from "./class_components/FooterComponent";
import ListComponent from "./function_componet/customer/ListComponent";



function App() {
  return (
    <>
      <HeaderComponent/>
      <ListComponent/>
      <FooterComponent/>
    </>
  );
}

export default App;
