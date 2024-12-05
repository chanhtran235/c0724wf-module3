import React, {useRef, useState} from "react";
import {addNewProduct, getAllProduct} from "../services/productService";
import {useNavigate} from 'react-router-dom'
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup';


function AddComponent() {

    const [product, setProduct] = useState({id: "", name: ""});
    // dùng để chuyến hướng ứng dụng
    const navigate = useNavigate();
    const handleSubmit = (value) => {
        console.log(value);
        addNewProduct(value);
        navigate('/products');
    }
    const handleValidate =Yup.object({
        id: Yup.number().required(" Id không được để trống")
            .min(1,"Phải là số nguyên dương"),
        name: Yup.string().required("Tên không được để trống")
            .matches(/^[A-Z][a-z]*(\s[A-Z][a-z]*)+$/,'Tên chưa đúng định dạng')
    })

// validate: kiểm tra tính hợp lệ của dữ liệu trước khi lưu vào csdl

    return (
        <>
            <Formik initialValues={product} onSubmit={handleSubmit} validationSchema={handleValidate}>
                <Form>
                    <div>
                        <label>ID:</label>
                        <Field type='text' name='id'/>
                        <ErrorMessage name='id' style ={{color:'red'}} component ='div'/>
                    </div>
                    <div>
                        <label>Name:</label>
                        <Field type='text' name='name'/>
                        <ErrorMessage name='name' style ={{color:'red'}} component ='div'/>
                    </div>
                    <div>
                        <button type={'submit'}>Save</button>
                    </div>
                </Form>
            </Formik>
        </>
    )
}

export default AddComponent;
