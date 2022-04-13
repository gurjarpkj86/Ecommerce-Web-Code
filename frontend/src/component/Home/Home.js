import React,{Fragment, useEffect} from 'react';
import {CgMouse} from "react-icons/all";
import './Home.css';
import Product from './ProductCard.js';
import MetaData from '../layout/MetaData';
import { clearErrors, getProduct } from '../../actions/productAction';
import { useSelector,useDispatch } from "react-redux";
import Loader from '../layout/Loader/Loader';
import { useAlert } from 'react-alert';

// const product = {
//   name:"Blue Tshirt",
//   images:[{url:"https://i.ibb.co/GcYDnJV/71-Z6d4kk-XXL-UX679.jpg"}],
//   price:"3000",
//   _id:"pankaj"
// }

const Home = () =>{
  const alert = useAlert();
  const dispatch = useDispatch();
  const {loading,error,products,productsCounts} = useSelector(
    (state) => state.products
  );

  useEffect(()=>{
    if (error){
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  },[dispatch,error,alert]);

  
  return (
    <Fragment>
      {loading ? (<Loader />) : (<Fragment>
      <MetaData title="Eommerce" />
      <div className='banner'>
        <p>Welcome tp Ecommerce</p>
        <h1>Find Amazing Product Below</h1>

        <a href='#container'>
          <button>Scroll <CgMouse /></button>
        </a>
      </div>

      <h2 className='homeHeading'>Featured Product</h2>

      <div className='container' id='container'>
        
        {products && products.map((product)=><Product product={product} />)}
      </div>
    </Fragment>)}
    </Fragment>
  );
}

export default Home;
