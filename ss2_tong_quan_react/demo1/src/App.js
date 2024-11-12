import logo from './logo.svg';
import './App.css';
import HeaderComponent from "./components/HeaderComponent";
import React from "react";
import FooterComponent from "./components/FooterComponent";
import ListComponent from "./components/customer/ListComponent";
const customerList = [
    {
        id: 1,
        name:"chánh1"
    },
    {
        id: 2,
        name:"chánh2"
    },
    {
        id: 3,
        name:"chánh3"
    }
]
const customerList2 = [
    {
        id: 1,
        name:"chánh1"
    },
    {
        id: 2,
        name:"chánh2"
    },
    {
        id: 3,
        name:"chánh3"
    }
]
function App() {
  return (
    <>
      <HeaderComponent/>
      <ListComponent list ={customerList} size={12}/>
      <FooterComponent/>
    </>
  );
}

export default App;
