// Promise.all 은 주어진 모든 promise가 이행될때까지 기다렸다가 결과 값을 배열로 반환
// promise 중 하나라도 거부되었다면 첫번째로 거부된 이유를 제시함

const p1 = new Promise((resolve)=>{
    setTimeout(resolve, 5000, "First");
});

let p2 = new Promise((resolve)=>{
    setTimeout(resolve, 1000, "Second");
});

const p3 = new Promise((resolve)=>{
    setTimeout(resolve, 3000, "Third");
});

let motherPromise = Promise.all([p1, p2, p3]);

motherPromise.then(values => console.log(values));

// 5초 후
// > ["First", "Second", "Third"]
// 모든 값을 얻을때까지 Promise.all은 기다렸다가 순서대로 반환

p2 = new Promise((resolve, reject)=>{
    setTimeout(reject, 1000, "Error");
});

motherPromise = Promise.all([p1, p2, p3]);

motherPromise.then(values => console.log(values));

// > Uncaught (in promise) Error
// 이 기능은 모든 promise가 제대로 작동하는지 체크할때 매우 유용하다