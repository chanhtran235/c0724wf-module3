import React, {useEffect, useState} from "react";
import {getAllCustomer} from "../../service/customerService";
import AddComponent from "./AddComponent";

const ListComponent = () => {
    const [customerList, setCustomerList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        console.log("----useEffect run------------")
        setCustomerList((pre) => (
            [
                ...getAllCustomer()
            ]
        ))
        return ()=>{
            // code thưc trước khi component unmount;
        }
    }, [isLoading]);

    const handleIsLoading = ()=>{
        setIsLoading((prevState) => !prevState)
    }

    return (
        <>
            {console.log("----------------list render--------------")}
            <AddComponent handleIsLoading ={handleIsLoading} />
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
                {customerList && customerList.map((customer, i) => (
                    <tr key={customer.id}>
                        <td>{i + 1}</td>
                        <td>{customer.id}</td>
                        <td>{customer.name}</td>
                        <td>
                            <button className={'btn btn-sm btn-danger'}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
}
export default ListComponent;