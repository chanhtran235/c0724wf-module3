import logo from './logo.svg';
import React from "react";
import './App.css';
import HeaderComponent from "./components/HeaderComponent";
import ListComponent from "./components/ListComponent";
import {Routes,Route} from "react-router-dom"
import HomeComponent from "./components/HomeComponent";
import AddComponent from "./components/AddComponent";
import DetailComponent from "./components/DetailComponent"

function App() {
    return (
        <>
          <HeaderComponent/>
          <Routes>
              <Route path={'/home'} element={<HomeComponent/>}></Route>
              <Route path={'/products'} element={<ListComponent/>}></Route>
              <Route path={'/products/create'} element={<AddComponent/>}></Route>
              <Route path={'/products/detail/:id'} element={<DetailComponent/>}></Route>
          </Routes>
        </>
    );
}

export default App;
