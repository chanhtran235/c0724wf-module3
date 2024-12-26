import React, {useEffect, useRef, useState} from "react";
import {deleteProductById, getAllProduct, searchProductByName} from "../services/productService";
import {Link} from "react-router-dom"
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {useSelector} from "react-redux";
import {getAllManufacture} from "../services/manufactureService";
import PaginationComponent from "./PaginationComponent";
function ListComponent() {
    const account = useSelector(state =>state.user.account );
    const [productList , setProductList] = useState([]);
    const [manufactureList , setManufactureList] = useState([]);
    const [show,setShow] = useState(false);
    const [isLoading,setIsLoading] = useState(false);
    const [isSearch,setIsSearch] = useState(false);
    const [deleteProduct,setDeleteProduct] = useState({id: "", name: ""});
    const searchRef = useRef();
    const searchManufactureIdRef = useRef();
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(2);
    const [totalPage, setTotalPage] = useState(0);

    useEffect( ()=>{
        console.log("------- userEffec run ----------------------")
        const fetchData = async ()=>{
            let name = searchRef.current.value;
            let manufactureId = searchManufactureIdRef.current.value;
            const {data, totatRecord} =  await searchProductByName(name,manufactureId,page,size);
            setProductList(data);
            setTotalPage(()=>Math.ceil(totatRecord/size))

        }
        const fetchDataManufac = async ()=>{
            const  list = await getAllManufacture()
            setManufactureList(list);
        }
        fetchData();
        fetchDataManufac();

    },[isLoading,page, isSearch]);

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
        setIsSearch(pre => !pre);
        setPage(1);
    }

    // const handleNext =()=> {
    //     if (page<totalPage){
    //         setPage(pre => pre+1)
    //     }
    // }
    // const handlePre =()=>{
    //     if (page>1){
    //         setPage(pre => pre-1)
    //     }
    //
    // }

    return (
        <>
            <h3>Product List</h3>
            <div className={'row justify-content-between mb-5 mt-5'}>
                <Link className={'w-25 btn btn-sm btn-primary'} to={'/products/create'}>Add new Product</Link>
                <form className={'w-75 row justify-content-end'}>
                    <input className={'w-25'} ref={searchRef} name={'searchName'} placeholder={'Enter search name'}/>
                    <select ref={searchManufactureIdRef} className={'w-25'}>
                        <option value={""}>------chon------</option>
                        {manufactureList.map(e=>(
                            <option value={e.id}>{e.name}</option>
                        ))}

                    </select>
                    <button onClick={handleSearch} className={' w-25 btn btn-success btn-sm'} type={'button'} >Search</button>
                </form>
            </div>
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
                    <th>Edit</th>
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
                            <Link to={'/products/edit/'+p.id} className={'btn btn-secondary btn-sm'}>Edit</Link>
                        </td>
                        <td>
                            {account&&((account.role=="ADMIN")?<Button className={'btn-sm btn-danger'} variant="danger" onClick={()=>{
                                handleShow(p);
                            }}>
                                Delete
                            </Button> :'')}

                        </td>
                    </tr>
                ))}
                <tr className="bg-light">
                    <td colSpan={9}>
                        {(productList.length==0)?'Danh sách trống':''}
                    </td>
                </tr>
                </tbody>
            </table>

            {/*<div>*/}
            {/*    <button className="btn btn-sm btn-secondary" onClick={handlePre}>Pre</button>*/}
            {/*    {[...new Array(totalPage)].map((e,i)=>*/}
            {/*        (<button className={`btn btn-sm page-item ${page === i + 1 ? 'active' : ''}`} onClick={()=>{setPage(i+1)}} key={i}>{i+1}</button>)*/}
            {/*    )}*/}
            {/*    <button className="btn btn-sm btn-secondary" onClick={handleNext}>Pre</button>*/}
            {/*</div>*/}

            <PaginationComponent page={page} setPage={setPage} totalPage={totalPage}/>

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