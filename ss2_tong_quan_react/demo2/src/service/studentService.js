
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

export function searchByName(name) {
 return studentList.filter(s=>s.name.includes(name));
}
export function addNew(student) {
    // gọi API để thêm mới
    studentList.push(student);
}

export function deleteById(id) {
    for (let i = 0; i <studentList.length ; i++) {
        if (studentList[i].id==id){
            studentList.splice(i,1);
            break;
        }
    }
}