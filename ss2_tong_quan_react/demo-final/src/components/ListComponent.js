import React, {useEffect, useState} from "react";
import {getAllProduct} from "../services/productService";
import {Link} from "react-router-dom"
function ListComponent() {
    const [productList , setProductList] = useState([]);
    useEffect(()=>{
        console.log("------- userEffec run ----------------------")
        const listProduct = getAllProduct();
        setProductList(()=>(
            [
                ...listProduct
            ]
        ))

    },[])
    return (
        <>
            {console.log("----------list render ----------------")}
            <h3>Product List</h3>
            <Link to={'/products/create'}>Add new Product</Link>
            <table>
                <thead>
                <tr>
                    <th>STT</th>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                {productList.map((p,i)=>(
                    <tr key={p.id}>
                        <td>{i+1}</td>
                        <td>{p.id}</td>
                        <td>{p.name}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );

}
export default ListComponent ;