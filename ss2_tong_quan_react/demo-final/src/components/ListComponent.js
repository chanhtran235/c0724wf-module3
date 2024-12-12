import React, {useEffect, useRef, useState} from "react";
import {deleteProductById, getAllProduct, searchProductByName} from "../services/productService";
import {Link} from "react-router-dom"
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
function ListComponent() {
    const [productList , setProductList] = useState([]);
    const [show,setShow] = useState(false);
    const [isLoading,setIsLoading] = useState(false);
    const [deleteProduct,setDeleteProduct] = useState({id: "", name: ""});
    const searchRef = useRef();
    useEffect( ()=>{
        console.log("------- userEffec run ----------------------")
        const fetchData = async ()=>{
            const list =  await getAllProduct();
            setProductList(list);
        }
        fetchData();

    },[isLoading]);

    const handleClose =()=>{
        setShow((pre) => !pre);
    }
    const handleShow =(product)=>{
           setShow((pre) => !pre);
           setDeleteProduct(product);


    }
    const handleDelete =async ()=>{
        await deleteProductById(deleteProduct.id);
        setIsLoading((pre) =>!pre);
        handleClose();
    }
    const handleSearch =()=>{
        let searchName = searchRef.current.value;
        const fetchData = async ()=>{
            const searchList = await searchProductByName(searchName);
            setProductList(searchList);
        }
        fetchData();
    }
    return (
        <>
            {console.log("----------list render ----------------")}
            <h3>Product List</h3>
            <Link className={'btn btn-sm btn-primary'} to={'/products/create'}>Add new Product</Link>

            <input ref={searchRef} name={'searchName'} placeholder={'Enter search name'}/>
            <button onClick={handleSearch} className={'btn btn-success btn-sm'} type={'button'} >Search</button>

            <table className={'table table-dark'}>
                <thead>
                <tr>
                    <th>STT</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Sim</th>
                    <th>Feature</th>
                    <th>Manufacture</th>
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
                        <td>{p.sim}</td>
                        <td>{p.feature}</td>
                        <td>{p.manufacture.name}</td>
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