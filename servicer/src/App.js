import React from "react";
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import TopBar from './components/TopBar'
import About from "./components/About";
import HomeScreen from "./components/HomeScreen";
import CartScreen from "./components/CartScreen";
import Register from "./components/Register";
import Login from "./components/Login";
import Checkout from "./components/Checkout";
import Contact from "./components/Contact"

function App() {
  return (
    <BrowserRouter>
      <TopBar/>
      <Switch>
        <Route path="/" component={HomeScreen} exact></Route>
        <Route path="/about" component={About} exact></Route>
        <Route path="/cart" component={CartScreen} exact></Route>
        <Route path="/register" component={Register} exact></Route>
        <Route path="/login" component={Login} exact></Route>
        <Route path="/checkout" component={Checkout} exact></Route>
        <Route path="/contact" component={Contact} exact></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
