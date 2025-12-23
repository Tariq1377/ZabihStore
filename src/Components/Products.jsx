import { useContext, useEffect, useState } from "react";
import Card  from "./Card";
import axios from "axios";
const Products=()=>{
    let [products ,setProducts]=useState([]);
        const loadProducts=()=>{
            axios.get("https://fakestoreapi.com/products").then(res=> setProducts(res.data));
        }
        useEffect(()=>{loadProducts},[]);
            console.log(products);
        return(
        <div className="contianer">
            <div className="row">
                {products.map(pdt=>{
                    return(
                        <div className="col-md-3">
                <Card id={pdt.id} title={pdt.title} description={pdt.description}image={pdt.image}price={pdt.price} />
                </div>
                    );
                })}
                 
            </div>
        </div>
    );
}
export default Products;