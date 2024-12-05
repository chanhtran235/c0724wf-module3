import React, {useRef, useState} from "react";
import {addNew, getAll} from "../../service/studentService";
import useForm from "../../hook/userForm";
import {useNavigate} from "react-router-dom";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";

function AddComponent() {
    const navigate = useNavigate()
    const [student, setStudent] = useState({id: "", name: "",gender : "Female",subject: [], classId:"C04"})
    const handleSubmit = (value) => {
        console.log(value)
    }
    const handleValidate = Yup.object({
        id: Yup.string().required("yêu cầu nhập id"),
        name: Yup.string().required("Yêu cầu nhập tên"),
        gender: Yup.string().required("Yêu cầu nhập tên"),
        subject:Yup.array().required("yêu cầu nhập").min(1,"Yêu cầu chọn ít nhất 1 môn"),
        classId:Yup.string().required("Yêu cầu chọn")
    })
    return (
        <>
            <Formik initialValues={student} onSubmit={handleSubmit} validationSchema={handleValidate}>
                <Form>
                    <div>
                        <label>ID</label>
                        <Field type="text" name={'id'} placeholder={'ID'}/>
                        <ErrorMessage name ='id' style ={{color:'red'}} component ='div' className ='error'/>
                    </div>
                    <div>
                        <label>Name</label>
                        <Field type="text" name={'name'} placeholder={'Name'}/>
                        <ErrorMessage name ='name' style ={{color:'red'}} component ='div' className ='error'/>
                    </div>
                    <div>
                        <label>Gender</label>
                        <Field  type="radio" name={'gender'} value ={'Male'}/>Male
                        <Field  type="radio" name={'gender'} value ={'Female'}/>Female
                        <ErrorMessage name ='gender'style ={{color:'red'}}  component ='div' className ='error'/>
                    </div>

                    <div>
                        <label>Subject</label>
                        <Field  type="checkbox" name={'subject'} value ={'Java'}/>Java
                        <Field  type="checkbox" name={'subject'} value ={'JS'}/> JS
                        <Field  type="checkbox" name={'subject'} value ={'PHP'}/>PHP
                        <ErrorMessage name ='subject' style ={{color:'red'}}  component ='div' className ='error'/>
                    </div>
                    <div>
                        <label>Class</label>
                        <Field  as="select" name={'classId'}>
                          <option>--------Select--------</option>
                          <option value={'C03'}>C03</option>
                          <option value={'C04'}>C04</option>
                          <option value={'C05'}>C05</option>
                        </Field>
                        <ErrorMessage name ='classId' style ={{color:'red'}} component ='div' className ='error'/>
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