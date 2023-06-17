import React,{useState} from 'react';
import { PRODUCTS } from '../products';
import Product from './product';
import "./home.css";
function Home() {
    const [data,setData]=useState(PRODUCTS)
    const filterResult=(catItem)=>{
        const result=PRODUCTS.filter((curData)=>{
                return curData.category===catItem;
        });
        setData(result)
            }
    return ( <div className="shop">
        <div className="col-md-2">
            <button className="btn btn-secondary m-1 w-100" onClick={()=>filterResult('Electronics')}>Electronics</button><br/>
            <button className="btn btn-secondary m-1 w-100" onClick={()=>filterResult('Fashion')}>Fashion</button><br/>
            <button className="btn btn-secondary m-1 w-100" onClick={()=>filterResult('Watch')}>Watches</button><br/>
        </div>
        <div className="col-md-9">
        <div className="products">{" "}
            {data.map((product)=>(<Product data={product}/>))}
        </div>
        </div>
    </div> );
}

export default Home;