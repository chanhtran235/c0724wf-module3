
const studentList = [
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

export function getAll() {

    // kết nối API (dữ liệu back-end)
    return studentList
}
export function addNew(student) {
    // gọi API để thêm mới
    studentList.push(student);
}