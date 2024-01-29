// 콜백 함수는 "분리" 목적이다.

// arrow expression(function)
// function printName(name) {
//     console.log(name);
// }

// const printName = (name) => {
//     console.log("name");
// };

// printName();

// 두 정수의 덧셈 결과 출력
// const add = (number1, number2, callback) => {
//     if (callback) {
//         callback(number1 + number2);
//     }
//     return number1 + number2;
// };

// add(1, 4, (result) => {
//     console.log(result);
// });

// 두 정수의 곱셈을 구한 뒤 결과에 2를 곱해서 출력
// const multply = (number1, number2, callback) => {
//     if (callback) {
//         callback(number1 * number2);
//     }

//     return number1 * number2;
// };

// const result = multply(3, 5, (result) => {
//     console.log(result * 2);
// });

// 성과 이름을 전달받아서 풀네임을 만든 뒤 "000님" 출력

// const fullName = (lastname, firstname, callback) => {
//     if (callback) {
//         callback(`${lastname}${firstname}`);
//     }
//     return `${lastname}${firstname}`;
// };

// fullName("강", "희주", (fullname) => {
//     console.log(fullname + "님");
// });

// 상품 가격과 총 합을 입력받고 개수를 알아낸 뒤
// 개수가 5개 이하면 true 아니면 false

// function getCount(price, total, callback) {
//     if (callback) {
//         return callback(total / price);
//     }
//     return total / price;
// }

// const result = getCount(1000, 3000, (count) => count <= 5);
// console.log(result);

// const product = (price, total, callback) => {
//     if (callback) {
//         callback(total / price);
//     }
//     return total / price;
// };

// product(2000, 18000, (priceperone) => {
//     priceperone < 5 ? console.log("true") : console.log("false");
// });

// 결제 상품 가격과 결제상태를 전달받아서
// 결제상태가 true 일때는 결제완료 , false일 경우 결제취소 출려

// const pay = (price, paystatus, callback) => {
//     if (callback) {
//         callback(price == paystatus);
//     }
//     return price == paystatus;
// };

// pay(2000, 1000, (pay) => {
//     pay == true ? console.log("결제완료") : console.log("결제실패");
// });

// function setStatus(price, status, callback) {
//     if (callback) {
//         callback(status ? `${price}원 결제 완료` : `${price}원 결제 취소`);
//     }
// }

// setStatus(3000, false, (message) => {
//     console.log(message);
// });
