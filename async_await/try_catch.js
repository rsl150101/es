// python 에서 try, except 처럼 예외처리를 할 수 있다
// try...catch 문은 실행할 코드블럭을 표시하고 예외(exception)가 발생(throw)할 경우의 응답을 지정합니다

const a = async() =>{
    try{
        const response = await fetch("https://google.com");
        const json = await response.json();
        console.log(json);
    } catch (error){
        console.log(error);
    }
} 

a();

// > TypeError: Failed to fetch