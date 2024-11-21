
import React, {useRef, useState} from "react";
import {addNew, getAll} from "../../service/studentService";

function AddComponent({handleIsLoading}) {
    const [student, setStudent] = useState({})
    const studentIdRef = useRef("");
    const studentNameRef = useRef("");

    const handleOnChange =(event)=>{
        console.log(event.target.name);
        console.log(event.target.value);
        setStudent(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }
    const handleAdd =()=>{
        const student = {
            id: studentIdRef.current.value,
            name: studentIdRef.current.value
        }
        addNew(student);
        console.log(getAll());
        handleIsLoading();
    }

    return (
        <>
            {console.log("----add-render-----------")}
            <form>
                <input ref={studentIdRef} name={'id'} placeholder={'ID'}/>
                <input ref={studentNameRef} name={'name'}  placeholder={'Name'}/>
                <button type={'button'} onClick={handleAdd}>Save</button>
            </form>
        </>
    )

}
export default React.memo(AddComponent) ;