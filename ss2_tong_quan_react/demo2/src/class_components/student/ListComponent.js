import React from "react";
import DeleteComponent from "./DeleteComponent";
import {getAll} from "../../service/studentService";
import AddComponent from "./AddComponent";


class ListComponent extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            studentList: [],
            isShow: false,
            isAddSuccess: false,
        }
        // this.handleShowModal = this.handleShowModal.bind(this);
    }

    handleShowModal() {
        this.setState(pre => ({
            ...pre,
            isShow: !pre.isShow
        }))
    }

    handleIsAddSuccess() {
        this.setState(pre => (
            {
                ...pre,
                isAddSuccess: !pre.isAddSuccess
            }
        ))
    }

    componentDidMount() {
        console.log("----hàm chạy sau khi component render lần đầu----- ")
        this.setState(pre => (
            {
                ...pre,
                studentList:
                    [
                        ...getAll()
                    ]
            }
        ))
    }
    componentDidUpdate(prevProps, prevState, snapshot) {

        if (prevState.isAddSuccess!=this.state.isAddSuccess){
            this.setState(pre => (
                {
                    ...pre,
                    studentList:
                        [
                            ...getAll()
                        ]


                }
            ))
        }
    }

    render() {
        return (
            <>
                {console.log("----render------------")}
                <AddComponent handleIsAddSuccess={() => {
                    this.handleIsAddSuccess()
                }}/>
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
                        this.state.studentList.map((e, i) => (
                            <tr key={e.id}>
                                <td>{i + 1}</td>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>
                                    <button onClick={this.handleShowModal.bind(this)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
                <DeleteComponent isShow={this.state.isShow} handleShowModal={this.handleShowModal.bind(this)}/>
            </>
        );
    }
}

export default ListComponent;