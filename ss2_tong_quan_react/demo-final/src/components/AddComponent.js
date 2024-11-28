import React, {useRef} from "react";
import {addNewProduct, getAllProduct} from "../services/productService";
import {useNavigate} from 'react-router-dom'
function AddComponent() {
    // useRef
    let idRef = useRef();
    let nameRef = useRef();
    // dùng để chuyến hướng ứng dụng
    const navigate = useNavigate();

    const  handleAddNewProduct = ()=>{
        const  product = {
            id: idRef.current.value,
            name: nameRef.current.value
        }
        // goi service
        addNewProduct(product);
        // chuyển hướng sang trang list
        navigate('/products');
    }
    return (
        <>
            <form>
                <input ref={idRef} placeholder={'Enter ID'} />
                <input ref={nameRef} placeholder={'Enter Name'} />
                <button type={'button'} onClick={handleAddNewProduct}>Save</button>
            </form>
        </>
    )
}
export default AddComponent ;
