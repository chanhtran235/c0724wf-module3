
import React, {useCallback, useEffect, useRef, useState} from "react";
import {getAll, searchByName} from "../../service/studentService";
import AddComponent from "./AddComponent";
import DeleteComponent from "./DeleteComponent";

const ListComponent = ()=>{

    const [studentList, setStudentList] = useState([]);
    const [deleteStudent, setDeleteStudent] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const searchRef = useRef();
    useEffect(()=>{
        // thực thi sau khi component render
        setStudentList(()=>(
            [
                ...getAll()
            ]
        ))
    },[isLoading,isShow]);

    const handleSearch =()=>{
        console.log(searchRef.current.value)
        console.log(searchByName(searchRef.current));
        setStudentList(()=>(
            [
                ...searchByName(searchRef.current.value)
            ]
        ))

    }
    const handleShowModal =(student)=>{
        console.log("--------open------------")
         setDeleteStudent(()=>student);
         setIsShow(pre=> !pre)
    }

    const handleCloseModal =useCallback(()=>{
        console.log("--------close------------")
        setIsShow(pre=> !pre)
    },[])

    return (
        <>
            {console.log("----render------------")}
            <AddComponent handleIsLoading ={useCallback(()=>{
                setIsLoading(prevState => !prevState)
            },[])}/>

            <form>
                <input ref={searchRef} placeholder={'enter name'}/>
                <button onClick={handleSearch} type={'button'}>Search</button>
            </form>

            <table className={'table table-dark'}>
                <thead>
                <tr>
                    <th>STT</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {
                  studentList&&studentList.map((s, i) => (
                        <tr key={s.id}>
                            <td>{i + 1}</td>
                            <td>{s.id}</td>
                            <td>{s.name}</td>
                            <td>
                                <button onClick={
                                    ()=>{handleShowModal(s)}
                                }>Delete</button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            <DeleteComponent isShow={isShow} deleteStudent={deleteStudent} handleCloseModal={handleCloseModal}/>
        </>
    );
}
export default ListComponent ;