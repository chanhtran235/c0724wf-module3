
import axios from "axios";
import {setLocale} from "yup";

// các hàm dùng dùng để call dữ liệu từ back end => API
const productList = [
    {
        id: 1,
        name : "sam sung"
    },
    {
        id: 2,
        name : "Nokia"
    },
    {
        id: 3,
        name : "Iphone"
    }
]
export async  function getAllProduct() {
  // gội API
    try {
        const  response = await axios.get("http://localhost:8080/products");
        console.log(response);
        return response.data;

    }catch (e) {
        console.log("lỗi "+e);
        return [];
    }
}




export async function addNewProduct(product) {

    try {
        const  response = await axios.post("http://localhost:8080/products",product);
        console.log("---------service- thêm mới-------------")
    }catch (e) {
        console.log("lỗi "+e);
    }

}

export async function getProductById(id) {
    try {
        const  response = await axios.get("http://localhost:8080/products/"+id);
        console.log(response);
        return response.data;

    }catch (e) {
        console.log("lỗi "+e);
        return null;
    }
}
export function deleteProductById(id) {
    for (let i = 0; i <productList.length ; i++) {
        if (productList[i].id ==id){
           productList.splice(i,1);
           break;
        }
    }
}
// viét function xoá