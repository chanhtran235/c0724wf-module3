
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css';
import HeaderComponent from "./components/HeaderComponent";
import ListComponent from "./components/ListComponent";
import {Routes,Route} from "react-router-dom"
import HomeComponent from "./components/HomeComponent";
import AddComponent from "./components/AddComponent";
import DetailComponent from "./components/DetailComponent"
import { ToastContainer} from "react-toastify"
import LoginComponent from "./components/LoginComponent";
import EditComponent from "./components/EditComponent";

function App() {
    return (
        <>
            <ToastContainer/>
          <HeaderComponent/>
          <Routes>
              <Route path={'/home'} element={<HomeComponent/>}/>
              <Route path={'/login'} element={<LoginComponent/>}/>
              <Route path={'/products'} element={<ListComponent/>}/>
              <Route path={'/products/create'} element={<AddComponent/>}/>
              <Route path={'/products/detail/:id'} element={<DetailComponent/>}/>
              <Route path={'/products/edit/:id'} element={<EditComponent/>}/>
          </Routes>
        </>
    );
}

export default App;
