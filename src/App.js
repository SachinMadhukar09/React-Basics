import React, { useState } from "react";
import Classcomponents from "./components/Classcomponents";
import Functionalcomponents from "./components/Functionalcomponenets";
import Managestate from "./components/Managestate";
import Hooks from "./components/Hooks";
import Array from "./components/Array";
import Whizlabs from "./components/Whizlabs";
import Basics from "./components/Basics";
import Todo from "./components/Todo";
// import Navbar from "./components/Navbar";
import Movielist from "./components/Movielist";
import Movieitem from "./components/Movieitem";
import Forms from "./components/Forms";
import Authentication from "./components/Authentication";
import NewTodo from "./components/NewTodo";
// import ReactRouter from "./components/ReactRouter";
// import Navbar from "./components/Routing/Navbar";
import Home from "./components/Routing/Home";
import ContactUs from "./components/Routing/ContactUs";
import Services from "./components/Routing/Services"
import Map from "./components/Map"

import {BrowserRouter , Route} from "react-router-dom";
import LocalStorage from "./components/LocalStorage";
import Navbar from "./components/Facebook/Navbar"
import Body from "./components/Facebook/Body";
import Dashboard from "./components/Facebook/Dashboard";

function App() {
  return (
    <div className="App">
      
    {/* <BrowserRouter> */}
      {/* <Navbar/> */}
      {/* <Route path='/' component={Body} exact/> */}
      {/* <Route path='/dashboard' component={Dashboard} exact/> */}
    {/* </BrowserRouter> */}
      {/* <LocalStorage/> */}
      {/* <Map/> */}

    {/* React Routing */}
{/*     
    <BrowserRouter>
    <Navbar/>
    <Route path='/home' component={Home} exact />

    <Route path='/contactus' component={ContactUs} exact />
    <Route path='/services' component={Services} exact />

    </BrowserRouter> */}


      {/* <NewTodo/> */}
      {/* <Authentication/> */}
     {/* <Forms/> */}
      {/* <Navbar/>  */}
      {/* <Movieitem/> */}
      {/* <Movielist/> */}
      {/* <Todo/> */}
      {/* <Basics/> */}
      {/* <Whizlabs/> */}
      {/* <Managestate/> */}
      {/* <Hooks/>~ */}
      {/* <Array/> */}
    </div>
  );
}
export default App;
