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

// arrow function 의 제한점

// this나 super에 대한 바인딩이 없고, methods 로 사용될 수 없습니다
// new.target키워드가 없습니다
// 일반적으로 스코프를 지정할 때 사용하는 call, apply, bind methods를 이용할 수 없습니다
// 생성자(Constructor)로 사용할 수 없습니다
// yield를 화살표 함수 내부에서 사용할 수 없습니다

// .find
//find() 메서드는 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환 
// ex)const array1 = [5, 12, 8, 130, 44];
//    const found = array1.find(element => element > 10);
//    결과 값 : 12

// .filter
// filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환
// ex)const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
//    const result = words.filter(word => word.length > 6);
//    결과 값 : ["exuberant", "destruction", "present"]

// .forEach
// forEach() 메서드는 주어진 함수를 배열 요소 각각에 대해 실행
// ex)const array1 = ['a', 'b', 'c'];
//    array1.forEach(element => console.log(element));
//    결과 값 : "a"
//             "b"
//             "c"

// .map  
// map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환
// ex)const array1 = [1, 4, 9, 16];
//    const map1 = array1.map(x => x * 2);
//    결과 값 : [2, 8, 18, 32]