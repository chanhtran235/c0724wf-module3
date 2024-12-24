import {ErrorMessage, Field, Form, Formik} from "formik";
import React, {useEffect, useState} from "react";
import {getAllManufacture} from "../services/manufactureService";
import {useNavigate} from "react-router-dom";
import {addNewProduct, getProductById, updateProduct} from "../services/productService";
import {toast} from "react-toastify";
import * as Yup from "yup";
import {useParams} from "react-router-dom";

export default function EditComponent() {
    const {id} = useParams();
    const [manufactureList, setManufactureList] = useState([]);
    const [product, setProduct] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const list = await getAllManufacture();
            setManufactureList(list);
        }
        fetchData();
    })
    useEffect(()=>{
        const fetProduct = async () => {
            let product = await getProductById(id);
            product ={
                ...product,
                manufacture: JSON.stringify(product.manufacture)
            }
            setProduct(product);
        }
        fetProduct();
    },[])

    const navigate = useNavigate();
    const handleSubmit = async (value) => {
        console.log("handle submit--------------------")
        console.log(value);
        const newProduct = {
            ...value,
            manufacture: JSON.parse(value.manufacture)
        }
        await updateProduct(id,newProduct);
        toast.success("Chỉnh sửa  thành công");

        navigate('/products');
    }
    const handleValidate = Yup.object({
        // id: Yup.number().required(" Id không được để trống")
        //     .min(1,"Phải là số nguyên dương"),
        name: Yup.string().required("Tên không được để trống")
            .matches(/^[A-Z][a-z\d]*(\s[A-Z][a-z\d]*)*$/, 'Tên chưa đúng định dạng'),
        manufacture: Yup.string().required("Phải chọn"),
        feature: Yup.array().min(1, "Phải chọn ít nhất 1")
    })
    if (product==null){
        return "";
    }
    return (
        <>
            <Formik initialValues={product} onSubmit={handleSubmit} validationSchema={handleValidate}>
                <Form>
                    <div>
                        <label>Name:</label>
                        <Field type='text' name='name'/>
                        <ErrorMessage name='name' style={{color: 'red'}} component='div'/>
                    </div>
                    <div>
                        <label>Number of SIM: </label>
                        <Field type='radio' name='sim' value="1"/> 1 SIM
                        <Field type='radio' name='sim' value="2"/> 2 SIM
                        <ErrorMessage name='sim' style={{color: 'red'}} component='div'/>
                    </div>

                    <div>
                        <label>Feature: </label>
                        <Field type='checkbox' name='feature' value="Bluetooth"/> Bluetooth
                        <Field type='checkbox' name='feature' value="5G"/> 5G
                        <Field type='checkbox' name='feature' value="Camera"/> Camera
                        <ErrorMessage name='feature' style={{color: 'red'}} component='div'/>
                    </div>
                    <div>
                        <label>Manufacturer</label>
                        <Field as='select' name='manufacture'>
                            <option value={''}>-------Select----------</option>
                            {manufactureList.map((m) => (
                                <option value={JSON.stringify(m)}>{m.name}</option>
                            ))}
                        </Field>
                        <ErrorMessage name='manufacture' style={{color: 'red'}} component='div'/>
                    </div>

                    <div>
                        <button type={'submit'}>Update</button>
                    </div>
                </Form>
            </Formik>
        </>
    );
}