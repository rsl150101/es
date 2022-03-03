fetch("http://localhost:8080/")
    .then(response =>response.text()) // .text()는 promise를 반환한다 
    .then(text => console.log(text)) // 위에서 promise를 반환하기 때문에 then 이 또 필요하다
    .catch(error => console.log(error));

// fetch 매서드는 JavaScript에서 서버로 네트워크 요청을 보내고 응답을 받을 수 있도록 해주는 매서드이다
// fetch 는 promise 를 return 한다
// 결과값으로 html의 text를 가져온다

// json을 사용해보자

fetch("https://yts.mx/api/v2/list_movies.json").then(response => {
    console.log(response);
    return response.json();
}).then(json => console.log(json)).catch(error => console.log(error));


// >Response {type: 'cors', url: 'https://yts.mx/api/v2/list_movies.json', redirected: false, status: 200, ok: true, …}
//  {status: 'ok', status_message: 'Query was successful', data: {…}, @meta: {…}}

// fetch 참조(https://velog.io/@sham/Fetch%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80)