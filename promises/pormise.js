// promise는 자바스크립트 비동기 처리에 사용되는 객체
// 서버로 데이터를 요청했을 때 서버가 언제 그 요청에 대한 응답을 할지도 모르는 상태에서
// 다른 코드를 실행 안하고 기다릴 수 없기 때문에 비동기 처리가 필요하다
// 비동기 작업이 맞이할 미래의 완료 또는 실패와 그 결과 값을 나타냄
// promise는 3가지 상태 pending(대기), fulfilled(이행), rejected(실패) 를 가진다

let hello = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "Hello");
});

console.log(hello);

setInterval(console.log, 1000, hello);

// > Promise {<pending>}
//   Promise {<pending>}
//   Promise {<pending>}
//   Promise {<resolved>: "Hello"}
//   Promise {<resolved>: "Hello"}
//   Promise {<resolved>: "Hello"}
//   Promise {<resolved>: "Hello"}

// 이행상태가 되면 then을 이용하여 결과 값을 받을 수 있다

hello.then(value => console.log(value));

// 3초가 지난 후
// > Hello

// 실패상태는 then 과 catch를 이용하여 결과 값을 받을 수 있다

hello = new Promise((resolve, reject) => {
    setTimeout(reject, 3000, "Bye");
});

hello.then(result => console.log(result));

// 3초가 지난 후
// > Uncaught (in promise) Bye

// Uncaught 에러가 발생한다 이 에러를 잡기 위해 catch를 사용

hello.then(result => console.log(result)).catch(error => console.log(error));

// 3초가 지난 후
// > Bye

// 참조 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise 