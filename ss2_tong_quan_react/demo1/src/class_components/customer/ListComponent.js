import React from "react";
import DeleteComponent from "./DeleteComponent";
import {getAllCustomer} from "../../service/customerService";
import AddComponent from "./AddComponent";


class ListComponent extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            customerList: [],
            isShowModal: false,
            isAddSuccess: false,
        }
        this.handleShowModal = this.handleShowModal.bind(this);
    }

    componentDidMount() {
        // fetch data từ backend
        console.log("------componentDidMount run--")
        this.setState((preState) => ({
            ...preState,
            customerList: [...getAllCustomer()]
        }));
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.isAddSuccess !== this.state.isAddSuccess) {
            this.setState((preState) => ({
                ...preState,
                customerList: [...getAllCustomer()]
            }))
        }
    }

    handleAddSuccess() {
        this.setState((pre) => ({
            ...pre,
            isAddSuccess: true,
        }))
    }

    // đóng mở modal

    handleShowModal() {
        this.setState((preState) => (
            {
                ...preState,
                isShowModal: !preState.isShowModal
            }
        ))
    }

    render() {
        return (
            <>
                <AddComponent handleAddSuccess={this.handleAddSuccess.bind(this)}/>

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
                    {this.state.customerList.map((e, i) => (
                        <tr key={e.id}>
                            <td>{i + 1}</td>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>
                                <button onClick={this.handleShowModal} className={'btn btn-sm btn-danger'}>Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <DeleteComponent handleShowModal={this.handleShowModal} isShowModal={this.state.isShowModal}/>
            </>
        )
    }

}

export default ListComponent;