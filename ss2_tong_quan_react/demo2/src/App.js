import logo from './logo.svg';
import './App.css';
import Header from "./class_components/Header";
import React from "react";
import Footer from "./class_components/Footer";
import ListComponent from "./class_components/student/ListComponent";

function App() {
  return (
      <>
        <Header/>
        <ListComponent/>
        <Footer/>
      </>

  );
}

export default App;
