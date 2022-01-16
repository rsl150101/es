// spread 는 풀어서 전개하는 것

const num = [1, 2, 3, 4];

console.log(num);
// > [1, 2, 3, 4]

// spread 를 사용할려면 풀어 해칠 객체나 배열 앞에 ... 점을 찍어서 사용

console.log(...num);
// > 1 2 3 4

// 사용 예제

// 객체나 배열에 추가하고 싶을 때

const lastName = ["kim", "park", "sung"];

const newName = [...lastName, "lee"];
// > ["kim", "park", "sung", "lee"]

// 객체에 추가 했을 때 값이 없거나 정의되지 않으면 키 값 조차 존재하지 않게 할 때

const hobby = prompt("Hobby");

if(hobby !== null){
    const user = {
        username : "coding",
        age : 20,
        ...(hobby !== "" && {hobby : hobby}),
    };
}else{
    const user = {
        username : "coding",
        age : 20
    };
}

// 논리적 AND(&&)는 왼쪽에서 오른쪽으로 피연산자를 평가하여 처음 만나는 잘못된 피연산자의 값을 즉시 반환합니다. 모든 값이 true이면 마지막 피연산자의 값이 반환됩니다.
// 따라서 hobby 가 빈 내용이 아니라면 hobby !== "" 는 true , hobby가 내용이 있으므로 true 이므로  hobby의 내용이 반환됨
// 참조 : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND