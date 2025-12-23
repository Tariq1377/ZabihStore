import axios from "axios";
import { useEffect, useState } from "react";
import "./Nav.css";

const Nav=()=>{
    let[categories, setCategories]=useState([]);
   const loadCategories=()=>axios.get("https://fakestoreapi.com/products/categories").then(res=>{setCategories(res.data)});
        
   useEffect(()=>{
    loadCategories();
    },[]);
   return(
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <img src="Images/file.enc" alt="logo" className="nav-logo"/>
    <a className="navbar-brand" href="#"><span>TARIQ SAQIB</span> Super Store</a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {
            categories.map(category =>{ return(
                <>
                         <li className="nav-item"> <a className="nav-link active" href="#">{ category}</a></li>            
                </>
            );})
        }
      </ul>    
    </div>
  </div>
</nav>
   );
}
export default Nav;