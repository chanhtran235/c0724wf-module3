import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import React from "react";
import Footer from "./components/Footer";
import ListComponent from "./components/student/ListComponent";

const studentList = [
    {
        id: 1,
        name: "chánh1"
    },
    {
        id: 2,
        name: "chánh2"
    },
    {
        id: 3,
        name: "chánh3"
    }
]
function App() {
  return (
      <>
        <Header/>
        <ListComponent studentList ={studentList}/>
        <Footer/>
      </>

  );
}

export default App;
