// let/const 는 블록 범위를 가진다

if(true){
    //block
}

// block 내 선언한 let/const는 외부에서 쓸 수 없음

if(true){
    let hello = "hi";
}

console.log(hello); 

// 결과 값: ReferenceError

// var는 블록 범위를 가지지 않고 함수 범위를 가지기 때문에 블록 내 선언 해주어도 블록 외부에서 사용 가능하다
// var을 함수 내 선언 해주면 함수 외부에서 사용할 수 없다

if(true){
    var hello = "hi";
}

console.log(hello);

// 결과 값: hi

function a(){
    var hello = "hi"
}

console.log(hello);

// 결과 값:ReferenceError
