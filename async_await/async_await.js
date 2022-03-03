// async, await 는 promise를 보기 좋게 만드는 문법
// await는 async 함수에서만 쓰일 수 있다
// await는 async 함수의 실행을 일시 중지하고 전달 된 Promise의 해결을 기다린 다음 async 함수의 실행을 다시 시작하고 완료후 값을 반환한다

// 기존의 promise

fetch("https://yts.mx/api/v2/list_movies.json").then(response => {
    console.log(response);
    return response.json();
}).then(json => console.log(json)).catch(error => console.log(error));

// async, await 기본 함수 문법

async function b(){
    const response = await fetch("https://yts.mx/api/v2/list_movies.json");
    console.log(response);
}
// > Response {type: 'cors', url: 'https://yts.mx/api/v2/list_movies.json', redirected: false, status: 200, ok: true, …}

async function c(){
    const response = fetch("https://yts.mx/api/v2/list_movies.json");
    console.log(response);
}
// > Promise {<pending>}

// await 유무의 차이
// 함수 c는 동시에 처리 되기 때문에 pending(대기)상태가 출력되고 
// 함수 b는 비동기적으로 처리 되기 때문에 의도한 결과 값을 얻을 수 있다

// async, await 화살표 함수 문법

const a = async() =>{
    const response = await fetch("https://yts.mx/api/v2/list_movies.json");
    const json = await response.json();
    console.log(json);
} 

// 기존 방식보다 async, await를 쓰면 좋은 6가지 이유(https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9)
