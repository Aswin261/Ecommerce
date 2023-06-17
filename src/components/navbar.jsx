import React from 'react';
import {HiShoppingCart} from 'react-icons/hi';
import { Link} from "react-router-dom";
function Navigation() {
    return (
        <nav class="navbar navbar-dark bg-dark py-1 ml-0">
            <div class="navbar ml-0 py-0">
  <span class="navbar-brand py-0"><strong>App Store</strong></span>
  <Link to="/"><button class="btn mr-0 py-md-0 "style={{color:"white"}}>Login</button></Link>
  <Link to="/home"><button class="btn mr-0 py-md-0 "style={{color:"white"}}>Home</button></Link>
  </div>
 <Link to="/cart"><button class="btn py-md-0 mr-0"style={{color:"white"}}><HiShoppingCart size={30}/></button></Link>
</nav>
      );
}

export default Navigation;
