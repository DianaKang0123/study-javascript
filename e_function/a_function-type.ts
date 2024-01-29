// // 함수는 무조건 값으로 본다.
// function add(number1 :number, number2:number):number {
//     return number1 + number2;
// }

//디폴트 파라미터
//값이 전달되지 않았을 경우 초기값을 설정할 수 있다.
function add(number1:number, number2:number, number3 = 0) :number {
    return number1 + number2 + number3;
}

let result = add(1, 3);
console.log(result);

// 아이디 비번 닉네임을 전달 받는다
// 이떄 닉네임의 기본값은 '없음' 으로 설정한다
function getInfo(id:string, pw:string, nickname = "없음") {
    console.log(id, pw, nickname);
}

getInfo("아이디", "1234");
