import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap/dist/css/bootstrap.min.css"
import React from "react";

class DeleteComponent extends React.Component {
    constructor(prop) {
        super(prop);
    }

    componentWillUnmount() {
        console.log("unmount")
    }

    render() {
        return (
        this.props.isShow &&
        (<div className="modal show" tabIndex="-1" style={{display: 'block'}}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div className="modal-footer">
                        <button onClick={this.props.handleShowModal} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close
                        </button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>)
        )

    }
}


export default DeleteComponent;