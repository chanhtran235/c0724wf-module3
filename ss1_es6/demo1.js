// console.log("Hello C07");
//
// // declare function
// function tinhTong(a,b) {
//  return a+b;
// }
// console.log(tinhTong(10,20));
//
// // express function
// // const sum = function(a,b){
// //
// // }
// // arrow function
//
// const sum = (a,b)=>{
//     let c = a+b;
//     return c;
// }
// console.log(sum(11,22));

// trường hợp đặc biết của arrow function với 1 tham số
//
// const showMessage = mess =>{
//     console.log(mess);
// }
// showMessage("hello codegym")

// trương hợp code chỉ có 1 lệnh return
// const sum = (a,b)=>a+b;

// let array = [10,3,4,7,9];

// for (let i = 0; i <array.length ; i++) {
//     console.log(`${i}: ${array[i]}`);
// }

// foreach để in
//
// function display (e,i){
//     console.log(`${i}: ${e}`);
// }
// display gọi là callback function
// truyền một function vào cho một function ;
// array.forEach((e,i)=>{
//     console.log(`${i}: ${e}`);
// });
//
// let newArray = array.map((e,i)=>{
//     return ++e;
// });
//
// const students = [
//     {
//         id: 1,
//         name: "chánh1"
//     },
//     {
//         id: 2,
//         name: "chánh2"
//     },
//     {
//         id: 3,
//         name: "chánh3"
//     }
// ]
//
// const listStudent = students.map((e,i)=>{
//     return (`<tr>
//                  <td>${e.id}</td>
//                   <td>${e.name}</td>
//             </tr>`)
// });
//
// console.log(listStudent);
//
// const filterStudent = students.filter((e,i)=>e.id>=2);
// console.log(filterStudent);

