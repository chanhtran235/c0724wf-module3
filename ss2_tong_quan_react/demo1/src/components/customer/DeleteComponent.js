// bootstrap
// react-bootstrap
// render component có điều kiện
// sử dụng if, &&
// falsy và truthy

// hook // bài tiếp theo nữa mới học

function DeleteComponent({isShowModal, id}) {
    console.log("---------" + isShowModal)
  const  handelCloseModal =()=>{
        // đóng modal
  }
    return (
       isShowModal&&<div className="modal show" tabIndex="-1" style={{display: 'block'}}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>Modal body text goes here.{id}</p>
                    </div>
                    <div className="modal-footer">
                        <button onClick={handelCloseModal} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default DeleteComponent;