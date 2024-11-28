import React from "react";
import {deleteCustomerById, getAllCustomer} from "../../service/customerService";

function DeleteComponent({prop1,isShowModal, deleteCustomer, handleCloseModal, handleIsLoading}) {

    const handleDelete = () => {
        deleteCustomerById(deleteCustomer.id);
        handleIsLoading();
        handleCloseModal();
    }
    return (
        <>
            {console.log("-------------modal-----------")}
            {
            isShowModal && <div className="modal show" tabIndex="-1" style={{display: 'block'}}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Delete</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <span>Do you want to delete </span><span
                            style={{color: 'red'}}>{deleteCustomer.name}.???</span>
                        </div>
                        <div className="modal-footer">
                            <button onClick={handleCloseModal} type="button" className="btn btn-secondary"
                                    data-bs-dismiss="modal">Close
                            </button>
                            <button onClick={handleDelete} type="button" className="btn btn-primary">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        }
        </>
    );

}

export default React.memo(DeleteComponent) ; // HOC (High Order Component)