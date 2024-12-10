import React, {useEffect, useState} from "react";
import {deleteProductById, getAllProduct} from "../services/productService";
import {Link} from "react-router-dom"
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
function ListComponent() {
    const [productList , setProductList] = useState([]);
    const [show,setShow] = useState(false);
    const [isLoading,setIsLoading] = useState(false);
    const [deleteProduct,setDeleteProduct] = useState({id: "", name: ""});
    useEffect( ()=>{
        console.log("------- userEffec run ----------------------")
        const fetchData = async ()=>{
            const list =  await getAllProduct();
            setProductList(list);
        }
        // const fetchData =  ()=>{
        //    getAllProduct().then((list)=>{
        //        setProductList(list);
        //     });
        // }
        fetchData();

    },[isLoading]);

    const handleClose =()=>{
        setShow((pre) => !pre);
    }
    const handleShow =(product)=>{
           setShow((pre) => !pre);
           setDeleteProduct(product);


    }
    const handleDelete =()=>{
        deleteProductById(deleteProduct.id);
        console.log(getAllProduct());
        setIsLoading((pre) =>!pre);
        handleClose();
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
                            <Button className={'btn-sm btn-danger'} variant="danger" onClick={()=>{
                                handleShow(p);
                            }}>
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
                <Modal.Body>Bạn có muốn xoá {deleteProduct.name}???</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );

}
export default ListComponent ;