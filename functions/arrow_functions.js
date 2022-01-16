// 기존의 function 모습

const score = ["A", "B", "C"]

function addPlus(item){
    return item + "+";
}

const plus = score.map(addPlus);

console.log(plus);

// 결과 값 ["A+", "B+", "C+"]


// arrow function
// 함수의 모습을 개선한 것

// 배열에서

const score = ["A", "B", "C"]

const plus = score.map(item => item + "+");

console.log(plus);

// 결과 값 ["A+", "B+", "C+"]
// arrow function은 implicit return을 하기 때문에 함수 표현식이 간단하다면 return과 {}를 생략할 수 있다
// 복잡한 내용이 있어 {}를 추가하게 되면 implicit return 기능은 사라지니 return을 추가해야한다
// 예를 들어

const plus = score.map((item, index) => {
    console.log("index no: ", index)
    return index + " : " + item + "+"
});

// 객체에서

const rtObj = () => {username : "kim"};
// > undefined
// 이는 {}안의 코드가 일련의 명령문으로 파싱되기 때문입니다(즉, username은 객체 리터럴의 키가 아니라 라벨처럼 처리됨).
// 이를 해결하기 위해서

const rtObj = () => ({username : "kim"});
// > {username : "kim", age: 20}
// 객체 리터럴 표현식을 반환하기 위해서는 표현식을 괄호로 감싸야함


// arrow function 의 제한점

// this나 super에 대한 바인딩이 없고, methods 로 사용될 수 없습니다
// new.target키워드가 없습니다
// 일반적으로 스코프를 지정할 때 사용하는 call, apply, bind methods를 이용할 수 없습니다
// 생성자(Constructor)로 사용할 수 없습니다
// yield를 화살표 함수 내부에서 사용할 수 없습니다
