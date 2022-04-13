import './App.css';
import React from 'react';
import Header from './component/layout/Header/Header.js';
import Footer from './component/layout/Footer/Footer.js';
import WebFont from "webfontloader";
import Home from "./component/Home/Home.js";
import ProductDetails from './component/Product/ProductDetails.js';
import Products from './component/Product/Products.js';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Search from './component/Product/Search.js';


function App() { 

  React.useEffect(()=>{
    WebFont.load({
      google:{
        families:['Roboto','Droid Sans','Chilanka'],
      },
    });
  },[]);

  return ( 
    <Router>
        <Header /> 
            <Route extact path="/home" component={Home} />
            <Route extact path="/product/:id" component={ProductDetails} />
            <Route extact path="/products" component={Products} />
            <Route path="/products/:keyword" component={Products} />
            <Route extact path="/search" component={Search} />
        <Footer />
	</Router>
  );
} 

export default App;
