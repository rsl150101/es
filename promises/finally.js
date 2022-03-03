// finally는 api를 호출할때 많이 쓰인다
// Promise가 성공적으로 수행 되었는지 거절되었는지에 관계없이 Promise가 처리 된 후에 코드가 무조건 한 번은 실행된다

const hello = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "Hello");
}).then(value => console.log(value)).finally(()=> console.log("Done"));

// 3초 후
// > hello
//   Done