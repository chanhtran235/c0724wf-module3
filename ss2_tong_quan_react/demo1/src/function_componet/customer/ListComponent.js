import React, {useEffect, useRef, useState} from "react";
import {getAllCustomer, searchByName} from "../../service/customerService";
import AddComponent from "./AddComponent";
import DeleteComponent from "./DeleteComponet";

const ListComponent = () => {
    const [customerList, setCustomerList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isShowModal, setIsShowModal] = useState(false);
    const [deleteCustomer, setDeleteCustomer] = useState({})
    const searchNameRef = useRef();

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

    const handleSearch = ()=>{
        let searchName =searchNameRef.current.value;
        const listSearch = searchByName(searchName);
        setCustomerList(() =>[
            ...listSearch
        ])
    }
    const handleShowModal = (customer)=>{
        setDeleteCustomer(()=>({
            ...customer
        }));

        setIsShowModal(prevState => !prevState);
    }
    const handleCloseModal =()=>{
        setIsShowModal(prevState => !prevState);
    }

    return (
        <>
            {console.log("----------------list render--------------")}
            <AddComponent handleIsLoading ={handleIsLoading} />
            <form>
                <input ref={searchNameRef} placeholder={'Enter name'}/>
                <button type={'button'} onClick={handleSearch}>Search</button>
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
                {customerList && customerList.map((customer, i) => (
                    <tr key={customer.id}>
                        <td>{i + 1}</td>
                        <td>{customer.id}</td>
                        <td>{customer.name}</td>
                        <td>
                            <button onClick={()=>{
                                handleShowModal(customer)
                            }} className={'btn btn-sm btn-danger'}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <DeleteComponent handleIsLoading={handleIsLoading} deleteCustomer ={deleteCustomer} isShowModal={isShowModal} handleCloseModal ={handleCloseModal}/>
        </>
    );
}
export default ListComponent;