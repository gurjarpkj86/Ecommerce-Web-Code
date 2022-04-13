import React,{Fragment, useEffect, useState} from "react";
import "./Products.css";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCard";
import Pagination from "react-js-pagination";

const Productss = ({match}) =>{ 

    const dispatch = useDispatch();

    const [currentPage,setCurrentPage] = useState(1);

    const {loading,error,products,productsCounts,resultPerPage} = useSelector(
        (state) => state.products
      );

    const keyword = match.params.keyword;

    const setCurrentPageNo = (e) => {
        setCurrentPage(e);
    }

    useEffect(() => {
        //debugger;
        dispatch(getProduct(keyword));
    },[dispatch,keyword]);
    
    return <Fragment>
        {loading ? <Loader /> : <Fragment>
            <h2 className="productsHeading">Products</h2>

            <div className="products">
                {products && products.map((product) =>(
                    <ProductCard key={product._id} product={product} />
                ))};
            </div>

            <div className="paginationBox">
                    <Pagination 
                        activePage={currentPage}
                        itemsCountPerPage={resultPerPage}
                        totalItemsCount={productsCounts}
                        onChange={setCurrentPageNo}
                        nextPageText="Next"
                        prevPageText="Prev"
                        firstPageText="1st"
                        lastPageText="Last"
                        itemClass="page-item"
                        linkClass="page-link"
                        activeClass="pageItemActive"
                        activeLinkClass="pageLinkActive"
                    />
            </div>
            </Fragment>} 
    </Fragment>;
}; 

export default Productss;