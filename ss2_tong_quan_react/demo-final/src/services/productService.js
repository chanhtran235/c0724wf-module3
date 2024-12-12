
import axios from "axios";

export async  function getAllProduct() {

    try {
        const  response = await axios.get("http://localhost:8080/products");
        console.log(response);
        return response.data;

    }catch (e) {
        console.log("lỗi "+e);
        return [];
    }
}

export async  function searchProductByName(searchName) {

    try {
        const  response = await axios.get(`http://localhost:8080/products?name_like=${searchName}`);
        console.log("-------search--------")
        console.log(response.data);
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
export async function deleteProductById(id) {
    try {
        const  response = await axios.delete("http://localhost:8080/products/"+id);
        console.log("---------service- thêm mới-------------")
    }catch (e) {
        console.log("lỗi "+e);
    }
}
// viét function xoá