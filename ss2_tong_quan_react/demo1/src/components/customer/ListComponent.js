import React from "react";
import DeleteComponent from "./DeleteComponent";


class ListComponent extends React.Component{
    constructor(prop) {
        super(prop);
    }
    handleShowModal(){
        // mỏ modal
    }
    render() {
        return (
            <>
                <h1>{this.props.size}</h1>
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
                    {this.props.list.map((e,i)=>(
                        <tr key={e.id}>
                            <td>{i+1}</td>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>
                                <button onClick={this.handleShowModal()} className={'btn btn-sm btn-danger'} >Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <DeleteComponent isShowModal ={false} id ={10}/>
            </>
        )
    }

}
export default ListComponent ;