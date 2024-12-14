
//  viết các hàm trả về action {type: , payload}
// account = {
//     username: "",
//     password: "",
//     role: "" // quyền
// }
export function login(account) {

    return {
        type: "LOGIN",
        payload: account
    }
}

export function logout() {

    return {
        type: "LOGOUT",
        payload: null
    }
}