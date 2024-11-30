

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
export function getAllProduct() {
  // gội API
    return productList;
}
export function addNewProduct(product) {
    productList.push(product);
}

export function getProductById(id) {
    for (let i = 0; i <productList.length ; i++) {
        if (productList[i].id ==id){
            return productList[i];
        }
    }
    return null;
}
// viét function xoá