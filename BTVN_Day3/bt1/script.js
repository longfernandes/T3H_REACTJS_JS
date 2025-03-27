// bt1
//const array1 = ['a','b','c']
//const array2 = ['a','b','c']
//console.log(typeof array1);
//console.log(typeof array2);
//const result = array1 + array2;
//console.log(result);
//console.log(array1 == array2);
//bt2
// const number = [11,7,9,10]
// console.log('phần tử có chỉ số 0 là: ', number[0]);
// console.log('phần tử có chỉ số 3 là: ', number[3]);
// const sum = number[1] + number[2];
// console.log('Cộng phần tử 1 vs 2 có kq: ', sum);
// const temp = number[1];
// number[1] = number[3];
// number[3] = temp;
// console.log('Mảng sau khi hoán đổi phần tử: ', number);
//bt3
// const numbers = [1,3,4,5,12,8,10,14,7,11,9]
// const evennumber = [];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         evennumber.push(numbers[i]);
//     }
// }
// console.log('Các phần tử chắn trong mảng là: ', evennumber);
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }
// console.log("Tổng các phần tử trong mảng:", sum);
// let minNumber = numbers[0];
// for(i = 0; i < numbers.length; i++) {
//     if(numbers[i] < minNumber) {
//         minNumber = numbers[i];
//     }
// }
// console.log('Phần tử nhỏ nhất trong mảng là: ', minNumber);
//bt4
// let n = 10;
// let number = [];
// if (n > 0) {
//     for (let i = 0; i < n; i++) {
//         let num = i * 2;
//         number.push(num);
//     } 
//     console.log('Mảng sau khi nhập: ', number);
// } else {
//     console.log('Vui lòng nhập số nguyên dương!')
// }

//bt5
// let number = [7,10]
// let n = 5;
// if (n > 2) {
//     while (number.length < n) {
//         number.unshift(0);
//     }
//     console.log('Độ dài sau khi thêm 0 là: ', number);
// } else {
//     console.log('Nhập lại n > 2!');
// }

//bt6
// let number = [100,2,3,4,5,6,7,8,9,10]
// while (number.length > 1) {
//     number.pop();
// }
// console.log('Độ dài mảng sau khi xóa còn 1 phần tử: ', number);

//bt7
// let s = "2,3,4,5,6,7,8,9";
// let n = 5;
// let number = s.split(",").map(Number);
// let squareNumber = [];
// for(let i = 0; i < number.length; i++) {
//     squareNumber.push(number[i] * number[i]);
// }
// console.log('Dãy số sau khi bình phương: ', squareNumber);

// let abcNumber = [];
// for (let i = 0; i < number.length; i++) {
//     if (number[i] >= n) {
//         abcNumber.push(number[i]);
//     }
// }
// console.log('Phần tử s lớn hơn n là: ', abcNumber);

// let foundNumber = undefined;
// for(let i = 0; i < number.length; i++) {
//     if(number[i] === n) {
//         foundNumber = number[i];
//         break;
//     }
// }
// if(foundNumber != undefined) {
//     console.log('Số đầu tiên trong dãy s có giá trị bằng n là: ', foundNumber);
// } else {
//     console.log('Không tìm thấy!')
// }