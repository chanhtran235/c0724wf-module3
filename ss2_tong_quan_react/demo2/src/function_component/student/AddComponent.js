
import React, {useState} from "react";
import {addNew, getAll} from "../../service/studentService";

function AddComponent({handleIsLoading}) {
    const [student, setStudent] = useState({})

    const handleOnChange =(event)=>{
        console.log(event.target.name);
        console.log(event.target.value);
        setStudent(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }
    const handleAdd =()=>{
        addNew(student);
        console.log(getAll());
        handleIsLoading();
    }

    return (
        <>
            <form>
                <input name={'id'} onChange={(event)=>{handleOnChange(event)}}  placeholder={'ID'}/>
                <input name={'name'} onChange={(event)=>{handleOnChange(event)}} placeholder={'Name'}/>
                <button type={'button'} onClick={handleAdd}>Save</button>
            </form>
        </>
    )

}
export default AddComponent ;