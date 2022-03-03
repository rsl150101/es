// Class 는 특별한 함수입니다
// Class를 정의하는 한 가지 방법은 class 선언을 이용하는 것
// 함수 선언과 클래스 선언의 중요한 차이점은 험수의 경우 정의하기 하기 전에 호출할 수 있지만, 클래스는 반드시 정의한 뒤에 사용할 수 있다는 점
// Class 표현식은 이름을 가질 수도 있고, 갖지 않을 수도 있습니다

class User{
    constructor(name){
        this.username = name;
    }
    sayHello(){
        console.log(`Hello, my name is ${this.username}`);
    }
}
// constructor 메서드는 class 로 생성된 객체를 생성하고 초기화하기 위한 특수한 메서드
// class 내에 한개만 존재할 수 있다

const hello = new User("kim");

hello.sayHello();

// > Hello, my name is kim

// 참조 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes