// 보통 하나나 두 개 이상의 비동기 작업을 순차적으로 실행해야 하는 상황을 흔히 보게 됩니다 
// 순차적으로 각각의 작업이 이전 단계 비동기 작업이 성공하고 나서 그 리턴 값을 이용하여 다음 비동기 작업을 실행해야 하는 경우를 의미합니다 
// 우리는 이런 상황에서 promise chain을 이용하여 해결하기도 합니다

const test = new Promise((resolve, reject) => resolve(2));

const timesTwo = number => number * 2;

test.then(timesTwo).then(timesTwo).then(timesTwo).then(timesTwo).then(lastNum => console.log(lastNum));

// > 32

// 에러가 발생하면 프로세스가 끝까지 가지 못함

test.then(timesTwo).then(timesTwo).then(timesTwo).then(timesTwo).then(()=> {throw Error("Something")}).then(lastNum => console.log(lastNum));

// > Uncaught (in promise) Error: Something

