import React, {useRef, useState} from "react";
import {addNewProduct, getAllProduct} from "../services/productService";
import {useNavigate} from 'react-router-dom'
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup';


function AddComponent() {

    const [product, setProduct] = useState(
        {
            name: "",
            manufacture:"",
            sim: "1",
            feature: ["Bluetooth"]
        });
    // dùng để chuyến hướng ứng dụng
    const navigate = useNavigate();
    const handleSubmit = async  (value) => {
        console.log(value);
       await addNewProduct(value);
        console.log("------thêm mới thành công----------");
        navigate('/products');
    }
    const handleValidate =Yup.object({
        // id: Yup.number().required(" Id không được để trống")
        //     .min(1,"Phải là số nguyên dương"),
        name: Yup.string().required("Tên không được để trống")
            .matches(/^[A-Z][a-z\d]*(\s[A-Z][a-z\d]*)*$/,'Tên chưa đúng định dạng'),
        manufacture: Yup.string().required("Phải chọn"),
        feature: Yup.array().min(1,"Phải chọn ít nhất 1")
    })

// validate: kiểm tra tính hợp lệ của dữ liệu trước khi lưu vào csdl

    return (
        <>
            <Formik initialValues={product} onSubmit={handleSubmit} validationSchema={handleValidate}>
                <Form>
                    {/*<div>*/}
                    {/*    <label>ID:</label>*/}
                    {/*    <Field type='text' name='id'/>*/}
                    {/*    <ErrorMessage name='id' style ={{color:'red'}} component ='div'/>*/}
                    {/*</div>*/}
                    <div>
                        <label>Name:</label>
                        <Field type='text' name='name'/>
                        <ErrorMessage name='name' style ={{color:'red'}} component ='div'/>
                    </div>
                    <div>
                        <label>Number of SIM: </label>
                        <Field type='radio' name='sim' value ="1"/> 1 SIM
                        <Field type='radio' name='sim' value ="2"/> 2 SIM
                        <ErrorMessage name='sim' style ={{color:'red'}} component ='div'/>
                    </div>

                    <div>
                        <label>Feature: </label>
                        <Field type='checkbox' name='feature' value ="Bluetooth"/>  Bluetooth
                        <Field type='checkbox' name='feature' value ="5G"/>  5G
                        <Field type='checkbox' name='feature' value ="Camera"/>  Camera
                        <ErrorMessage name='feature' style ={{color:'red'}} component ='div'/>
                    </div>
                    <div>
                        <label>Manufacturer</label>
                        <Field as ='select' name='manufacture'>
                            <option value={''}>-------Select----------</option>
                            <option value={'Sam Sung'}>Sam sung</option>
                            <option value={'Nokia'}>Nokia</option>
                            <option value={'Iphone'}>Iphone</option>
                        </Field>
                        <ErrorMessage name='manufacture' style ={{color:'red'}} component ='div'/>
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
