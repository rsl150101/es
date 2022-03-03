// Promise.race 은 가장 먼저 완료된 promise 결과값을 이행하거나 거부한다

const p1 = new Promise((resolve)=>{
    setTimeout(resolve, 5000, "First");
});

const p2 = new Promise((resolve)=>{
    setTimeout(resolve, 1000, "Second");
});

const p3 = new Promise((resolve)=>{
    setTimeout(resolve, 3000, "Third");
});

const motherPromise = Promise.race([p1, p2, p3]);

motherPromise.then(values => console.log(values));

// > Second
// p2 가 가장 먼저 완료되어서 p2를 이행함