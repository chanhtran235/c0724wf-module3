import React from "react";
import DeleteComponent from "./DeleteComponent";



class ListComponent extends React.Component{
    constructor(prop) {
        super(prop);
        // this.state ={
        //     isShow :false
        // }
    }
    handleShowModal(){
      // this.setState({
      //     isShow: true
      // })
    }

    render() {
        return (
            <>
            <table  className={'table table-dark'}>
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
                  this.props.studentList.map((e, i) => (
                        <tr key={e.id}>
                            <td>{i + 1}</td>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>
                                <button onClick={this.handleShowModal()}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
                <DeleteComponent isShow={false}/>
            </>
        );
    }
}
export default ListComponent ;