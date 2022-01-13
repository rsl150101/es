var myName = "kim";
console.log(myName);

// 결과 값 : kim

console.log(myName);
var myName = "kim";

// 결과 값 : undefined

// var은 변수의 선언과 초기화단계가 동시에 이루어지고(var=undefined) 그 후에 할당 단계에서 사용자가 정의한 값을 담게 된다
// JS가 hoisting(변수의 선언과 초기화를 분리한 후, 선언만 코드의 최상단으로 옮김) 하기 때문에 발생
// 예를 들어

var myName;
console.log(myName);
myName = "kim";

// 이러한 것은 버그로 판단 할 수도 있기에 변수를 잘못된 곳에 정의한 것을 파악하기 어렵다
// 그래서 더더욱 var를 사용하는 것을 권장하지 않는다

console.log(myName);
let myName = "kim";

// 결과 값 : ReferenceError

// let은 var과 달리 선언과 초기화 단계(let과 const는 hoisting 시 undefined로 변수를 초기화하지 않는다)가 분리되어 진행되고 
//선언과 초기화 완료시점 까지를 TDZ(Temporal Dead Zone)이라 칭하며 초기화 전에 접근하면 ReferenceError를 발생한다

