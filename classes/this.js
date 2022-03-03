class Counter{
    constructor({initialNum = 0, counterId, plusId, minusId}){
        this.count = initialNum;
        this.counter = document.getElementById(counterId);
        this.plusBtn = document.getElementById(plusId);
        this.minusBtn = document.getElementById(minusId);
        this.counter.innerText = initialNum;
        this.addEventListeners();
    }
    addEventListeners(){
        this.plusBtn.addEventListener("click", this.increase);
        this.minusBtn.addEventListener("click", this.decrease);
    }
    increase() {
        this.count = this.count +1;
        this.repaintCount();
    }
    decrease() {
        this.count = this.count -1;
        this.repaintCount();
    }
    repaintCount(){
        this.counter.innerText = this.count;
    }
}

new Counter({counterId:"count", plusId: "plus", minusId: "minus"})

// increase btn
// > Uncaught TypeError: this.repaintCount is not a function
//   at HTMLButtonElement.increase

// decrease btn
// > Uncaught TypeError: this.repaintCount is not a function
//   at HTMLButtonElement.decrease

// increase, decrease 함수의 this는 Counter 클래스를 가르키지 않고 btn을 가르킨다
// 이렇게 일부 상황에서 this가 가르키는 대상이 바뀐다
// 이를 해결하기 위해 arrow function 의 제한점을 활용한다
// arrow function 은 this에 대한 바인딩이 없기 때문에 Counter 클래스를 가르키게 할 수 있다

class Counter{
    constructor({initialNum = 0, counterId, plusId, minusId}){
        this.count = initialNum;
        this.counter = document.getElementById(counterId);
        this.plusBtn = document.getElementById(plusId);
        this.minusBtn = document.getElementById(minusId);
        this.counter.innerText = initialNum;
        this.addEventListeners();
    }
    addEventListeners(){
        this.plusBtn.addEventListener("click", this.increase);
        this.minusBtn.addEventListener("click", this.decrease);
    }
    increase=()=> {
        this.count = this.count +1;
        this.repaintCount();
    }
    decrease=()=> {
        this.count = this.count -1;
        this.repaintCount();
    }
    repaintCount(){
        this.counter.innerText = this.count;
    }
}

new Counter({counterId:"count", plusId: "plus", minusId: "minus"})

// increase, decrease 화살표 함수의 this 는 각 btn 을 가르키지 않고 Counter 클래스를 가르키게 된다