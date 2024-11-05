
// default param : giá mặc định của tham số

// const sum=(a =1,b=2)=>a+b;
//
// console.log(sum(10,20));
// console.log(sum(5));
// // Destructuring: phân rã mảng /đối tượng để lấy ra phân tử hoặc thuộc tính dễ dàng hơn

// let mang1 =[23,2,5,7,34,6];
// let mang2  = [2,4,6,8];
//
// let mang3 = [...mang1,mang2]
//
// console.log(mang3)
// muốn lấy 2 phần tử đầu tiên của mảng
// let a = mang[0];
// let b = mang[1];

// const [a,b,...rest] = mang1;
// // console.log(a)
// // console.log(b)
// // console.log(rest);
//
// let student = {
//     id: 1,
//     name: 'chánh1'
// }
// const {name,id} = student;
//
// // rest param
// console.log(name)
// console.log(id)
//
// const sum = (...rest)=>{
//     let tong =0;
//     for (let i=0; i< rest.length;i++){
//         tong += rest[i];
//     }
//     return tong;
// }
// console.log(sum(3,4,6,7,8,9,1,3));

// toán tử spread ;

// thêm thuộc tính cho đối tượng
student ={
    ...student,
    age:40
}

console.log(student);

