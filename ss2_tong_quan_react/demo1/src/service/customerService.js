// kết nối API

const customerList = [
    {
        id: 1,
        name: "chánh1"
    },
    {
        id: 2,
        name: "chánh2"
    },
    {
        id: 3,
        name: "chánh3"
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

export function deleteCustomerById(id) {
    for (let i = 0; i < customerList.length; i++) {
        if (customerList[i].id == id) {
            customerList.splice(i, 1);
            break;
        }
    }
}

export function searchByName(name) {
    return customerList.filter((customer) => customer.name.includes(name))
}