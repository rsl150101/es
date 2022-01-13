const profile = {
    name: "kim",
    age: 20,
    addYear: () =>{
        this.age ++;
    }
};

// arrow function 에서 this 는 바인딩이 되지 않기 때문에 전역객체를 가르킨다

const profile = {
    name: "kim",
    age: 20,
    addYear(){
        this.age ++;
    }
};

// 기본 함수에서는 내부 범위를 가르킨다
// this 를 사용할 때는 기본 함수를 사용하자
