
// generator function 문법
// function 뒤에 * 로 표현

function* listPeople(){
    yield "Kim";
    yield "Park";
    yield "Sung";
}

const listG = listPeople();

// Generator.prototype.next() 메서드를 통해 할당(yield)된 값을 반환
