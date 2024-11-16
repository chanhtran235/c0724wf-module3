import React from "react";
import DeleteComponent from "./DeleteComponent";
import {getAllCustomer} from "../../service/customerService";
import AddComponent from "./AddComponent";


class ListComponent extends React.Component {
    constructor(prop) {
        super(prop);
        // state là một đối tượng
        this.state = {
            customerList: [],
            isShowModal: false,
            isReload: false,
            deleteCustomer: {
                id: "",
                name: "",
            }

        }
        this.handleShowModal = this.handleShowModal.bind(this);
        this.handleReload = this.handleReload.bind(this);
    }
    // sau khi render lần đầu tiên thì hàm sẽ chạy để lấy dữ liệu
    componentDidMount() {
        // fetch data từ backend
        console.log("------componentDidMount run--")
        const  students = getAllCustomer();
        this.setState((preState) => ({
            ...preState,
            customerList: [...students]
        }));
    }
    // sau khi thêm mới thành công thì cần kiểm tra state thay đổi => lấy dữ liệu ở dưới lên và render lại
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.isReload !== this.state.isReload) {
            this.setState((preState) => ({
                ...preState,
                customerList: [...getAllCustomer()]
            }))
        }
    }
   // hàm cập nhật state để component render lại
    handleReload() {
        this.setState((pre) => ({
            ...pre,
            isReload: !pre.isReload,
        }))
    }

    // đóng mở modal

    handleShowModal(customer) {
        this.setState((preState) => (
            {
                ...preState,
                isShowModal: !preState.isShowModal,
                deleteCustomer : {
                    ...customer
                }
            }
        ))
    }

    render() {
        return (
            <>
                {console.log("----------------list render--------------")}
                <AddComponent handleReload={this.handleReload.bind(this)}/>

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
                    {this.state.customerList.map((customer, i) => (
                        <tr key={customer.id}>
                            <td>{i + 1}</td>
                            <td>{customer.id}</td>
                            <td>{customer.name}</td>
                            <td>
                                <button onClick={()=>{
                                    this.handleShowModal(customer)
                                }} className={'btn btn-sm btn-danger'}>Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <DeleteComponent handleReload = {this.handleReload} deleteCustomer ={this.state.deleteCustomer} handleShowModal={this.handleShowModal} isShowModal={this.state.isShowModal}/>
            </>
        )
    }

}

export default ListComponent;