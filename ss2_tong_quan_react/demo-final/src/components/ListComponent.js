import React, {useEffect, useState} from "react";
import {getAllProduct} from "../services/productService";
import {Link} from "react-router-dom"
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
function ListComponent() {
    const [productList , setProductList] = useState([]);
    const [show,setShow] = useState(false);
    useEffect(()=>{
        console.log("------- userEffec run ----------------------")
        const listProduct = getAllProduct();
        setProductList(()=>(
            [
                ...listProduct
            ]
        ))

    },[]);

    const handleClose =()=>{
        setShow((pre) => !pre);
    }
    const handleShow =()=>{
           setShow((pre) => !pre);

    }
    const handleDelete =()=>{

    }
    return (
        <>
            {console.log("----------list render ----------------")}
            <h3>Product List</h3>
            <Link to={'/products/create'}>Add new Product</Link>
            <table className={'table table-dark'}>
                <thead>
                <tr>
                    <th>STT</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Detail</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {productList.map((p,i)=>(
                    <tr key={p.id}>
                        <td>{i+1}</td>
                        <td>{p.id}</td>
                        <td>{p.name}</td>
                        <td>
                            <Link to={'/products/detail/'+p.id} className={'btn btn-secondary btn-sm'}>Detail</Link>
                        </td>
                        <td>
                            <Button variant="primary" onClick={handleShow}>
                                Delete
                            </Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleDelete}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );

}
export default ListComponent ;