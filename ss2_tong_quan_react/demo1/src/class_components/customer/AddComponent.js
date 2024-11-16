import React from "react";
import {addNewCustomer, getAllCustomer} from "../../service/customerService";

class AddComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            customer :{
                id: "",
                name:""
            }
        }
        this.handleSave= this.handleSave.bind(this);

    }
    handleSave(){
        console.log("-----save---------")
        // goi api thêm mới
        addNewCustomer(this.state.customer);
        this.props.handleReload();

    }
    handleOnChange(event){
        // console.log(event.target.name)
        // console.log(event.target.value)
        this.setState((preState)=>({
            ...preState,
            customer:{
                ...preState.customer,
                [event.target.name]: event.target.value,
            }

        }))

    }

    render() {
        return (
            <>
                <h2>Add Customer</h2>
                <form>
                    ID:
                    <input name={'id'} onChange={(event)=>{
                        this.handleOnChange(event)
                    }}/>
                    Name:
                    <input name={'name'} onChange={(event)=>{
                        this.handleOnChange(event)
                    }}/>
                    <button onClick={this.handleSave} type="button">Save</button>
                </form>
            </>

        );
    }
}
export default AddComponent ;