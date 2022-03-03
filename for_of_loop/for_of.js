// 반복문

const lastNames = ["kim", "park", "sung", "lee"];

for (let i = 0; i < lastNames.length; i++){
    console.log(lastNames[i]);
}

// > kim
//   park
//   sung
//   lee

// for of 문을 사용하면

for(const lastName of lastNames){
    console.log(lastName);
}

// 간단 명료해짐
// for of는 iterable(반복가능한) 한 모든 것에서 동작함
// forEach 와 달리 break, continue, return 구문과 함께 사용 가능하다

lastNames.forEach(item => {
    if(item ==="sung"){
        break;
    }else{
        console.log(lastName);
    }
});

// > SyntaxError: Illegal break statement

for(const lastName of lastNames){
    if(item ==="sung"){
        break;
    }else{
        console.log(lastName);
    }
}

// > kim
//   park