// 객체 선언
// js에서는 객체 내부의 필드를 프로퍼티라고 부른다.
let user = {
    name: "한동석",
    age: 20,
    address: "경기도",
    indroduce: () => {
        console.log("hi😘");
    },
};
console.log(typeof user);
user.indroduce();
// 일반적으로 .를 사용해서 프로퍼티에 접근한다
console.log(user.name);
// 프로퍼티 이름에 (-)와 같은 특수문자가 들어가 있거나
// 프로퍼티 이름에 규칙성이 있어 한번에 가져와야 할 때는
// []를 사용해서 프로퍼티에 접근한다.
console.log(user["name"]);
