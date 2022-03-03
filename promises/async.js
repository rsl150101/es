// 비동기(Async)란?
// 특정 코드가 종료되지 않았어도 대기하지 않고 다음 코드를 실행하는 자바스크립트의 특성

const hello = fetch("http://google.com");

console.log("blablabla");

// > blablabla
//   Promise {<pending>} TypeError

// 이론대로라면 에러가 먼저 실행되고 blablabla가 출력되어야한다
// 하지만 자바스크립트는 fetch를 실행하면서 동시에 blablabla를 console.log한다
// 그러고 나서 fetch에서 에러가 발생함을 알린다 순차적으로 실행되는게 아니라 한꺼번에 실행됨
// 이 문제를 처리하기 위해 promise를 사용한다

// 참조 : http://ingg.dev/js-work (Javascript 동작 원리와 비동기처리)
//       https://private.tistory.com/24,
//       https://velog.io/@sunnysideup0w0/Promise-Async-await-%EA%B7%B8%EB%A6%AC%EA%B3%A0-%EB%B3%91%EB%A0%AC%EC%A0%81-%EB%B9%84%EB%8F%99%EA%B8%B0-%EC%B2%98%EB%A6%AC (동기 비동기)
