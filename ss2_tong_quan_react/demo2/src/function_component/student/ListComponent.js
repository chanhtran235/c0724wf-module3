
import React, {useEffect, useRef, useState} from "react";
import {getAll, searchByName} from "../../service/studentService";
import AddComponent from "./AddComponent";

const ListComponent =()=>{

    const [studentList, setStudentList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const searchRef = useRef();
    useEffect(()=>{
        // thực thi sau khi component render
        setStudentList(()=>(
            [
                ...getAll()
            ]
        ))
    },[isLoading]);
    // useEffect(()=>{
    //
    // },[searchValue])

    const handleIsLoading =()=>{
        setIsLoading(pre=>!pre);
    }
    const handleOnChange =(event)=>{
        let value =event.target.value;
        console.log(value)
        setSearchValue(value);
    }
    const handleSearch =()=>{
        console.log(searchRef.current.value)
        console.log(searchByName(searchRef.current.value));
        setStudentList(()=>(
            [
                ...searchByName(searchRef.current.value)
            ]
        ))

    }

    return (
        <>
            {console.log("----render------------")}
            <AddComponent handleIsLoading ={handleIsLoading}/>

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
                  studentList&&studentList.map((e, i) => (
                        <tr key={e.id}>
                            <td>{i + 1}</td>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>
    );
}
export default ListComponent ;