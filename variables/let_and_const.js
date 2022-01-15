var // (재할당, 재선언 가능)

var v = 1;
v = 2; 
var v = 3;

// 변수를 선언할 땐 var 보단 let, const를 사용하는 것이 좋다
// var로 변수를 선언해도 아무 문제 없지만 var로 선언할 경우 다른 프로그래머와 함께 개발할 때
// 흔하게 쓰이는 변수 이름인 경우 값이 다시 쓰여졌거나 정의되었을 때 문제점이 없기 때문에 
// 어떤 변수가 변했는지 파악하기 힘들다
// 그래서 변수가 변하는 걸 막기 위해 const가 존재한다

const // (재할당, 재선언 불가능) 

const c = 1;
c = 2; // 에러
const c = 3; // 에러

// const가 내용이 변하는 걸 막아줌 그렇다 해서 const가 잠겨 있거나 읽기 전용인 것은 아니다
// 예를 들어 오브젝트인 경우

const profile ={
    name:"kim",
    age:20
};

profile = true; // 에러

//하지만 profile 내 내용 수정은 정상적으로 실행된다

profile.name = "park";  

console.log(profile);

// profile 자체를 변경할 순 없지만 profile 내 어떤 것은 바꿀 수 있다
// const 는 참조변수 메모리의 주소값이 변하지 않을 뿐, 그 주소가 가리키는 데이터들은 변할 수 있다

let; // (재할당 가능, 재선언 불가능)

let l = 1;
l = 2;
let l =3; // 에러


// var이 쓰이지 않는 이유가 궁금하다면 hoisting에 대해 알아 보자(https://developer.mozilla.org/ko/docs/Glossary/Hoisting)