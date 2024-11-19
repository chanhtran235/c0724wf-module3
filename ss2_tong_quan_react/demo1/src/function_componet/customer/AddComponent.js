import React, {useRef, useState} from "react";
import {addNewCustomer, getAllCustomer} from "../../service/customerService";

function AddComponent({handleIsLoading}) {


    const [customer, setCustomer] = useState({})

    // hook useRef
    const idRef = useRef();
    const nameRef = useRef();

    // const handleOnChange = (event) => {
    //     console.log(event.target.name)
    //     console.log(event.target.value)
    //     setCustomer(prevState =>({
    //         ...prevState,
    //         [event.target.name] : event.target.value
    //     }) )
    // }
    const handleSave =()=>{
        console.log("-------add-------------------")
        // console.log(idRef.current.value);
        // console.log(nameRef.current.value);
       addNewCustomer({
           id:idRef.current.value,
           name: nameRef.current.value
       });
        console.log(getAllCustomer());
        handleIsLoading();
    }

    return (
        <>
            <h2>Add Customer</h2>
            <form>
                ID:
                <input name={'id'} ref={idRef} />
                Name:
                <input name={'name'} ref={nameRef}/>
                <button onClick={handleSave} type="button">Save</button>
            </form>
        </>
    );
}

export default AddComponent;