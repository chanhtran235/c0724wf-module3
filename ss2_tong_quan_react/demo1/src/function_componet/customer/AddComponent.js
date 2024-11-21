import React, {useRef, useState} from "react";
import {addNewCustomer, getAllCustomer} from "../../service/customerService";

function AddComponent({handleIsLoading}) {
    // hook useRef
    const idRef = useRef();
    const nameRef = useRef();

    const handleSave =()=>{

       addNewCustomer({
           id:idRef.current.value,
           name: nameRef.current.value
       });
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