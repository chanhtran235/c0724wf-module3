// kết nối API

const customerList = [
    {
        id: 1,
        name:"chánh1"
    },
    {
        id: 2,
        name:"chánh2"
    },
    {
        id: 3,
        name:"chánh3"
    }
]

export function getAllCustomer() {
// kết nối API của back-end
    return customerList;
}

export function addNewCustomer(customer) {
// kết nối API để thêm mới
    customerList.push(customer);
}