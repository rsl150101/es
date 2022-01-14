// .find ,.findIndex
// find() 메서드는 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환 
// findIndex() 메서드는 주어진 판별 함수를 만족하는 첫 번째 요소의 인덱스를 반환
// ex)
const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);
// 결과 값 : 12
const foundIdx = array1.findIndex(element=> element >10);
// 결과 값 : 1

// .filter
// filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환
// ex)
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
// 결과 값 : ["exuberant", "destruction", "present"]

// .forEach
// forEach() 메서드는 주어진 함수를 배열 요소 각각에 대해 실행
// ex)
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
// 결과 값 : "a"
//           "b"
//           "c"

// .map  
// map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환
// ex)
const array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);
// 결과 값 : [2, 8, 18, 32]

// .fill
// fill() 메서드는 배열의 시작 인덱스부터 끝 인덱스의 이전까지 정적인 값 하나로 채웁니다
// .fill(value, start idx, end idx);

const array1 = [1, 2, 3, 4];

// 인덱스 2번부터 3번까지를 0으로 채움
console.log(array1.fill(0, 2, 4));
// 결과 값 : [1, 2, 0, 0]

// 인덱스 1번부터 끝까지 5로 채움
console.log(array1.fill(5, 1));
// 결과 값 : [1, 5, 5, 5]

// 배열의 모든 값을 6으로 채움
console.log(array1.fill(6));
// 결과 값 : [6, 6, 6, 6]

// .includes
// includes() 메서드는 배열이 특정 요소를 포함하고 있는지 판별
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// 결과 값 : true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// 결과 값 : true

// Array.of
// 어떤 것을 배열로 만들고 싶을때 사용함
const array1 = Array.of("a", "b", "c");
// 결과 값 : ["a", "b", "c"]

// Array.from
// 유사 배열 객체나 반복 가능한 객체를 새로운 배열로 만듬
// 예를 들어 html의 여러 노드를 가져오면 노드 리스트 형태로 가져옴
// 노드 리스트는 유사 배열 객체이므로 array 관련 메소드가 작용하지 않는다
// 따라서 Array.from 메소드를 이용해 유사 배열 객체를 새로운 배열로 만들고 array 관련 메소드를 사용해야함

const btn = document.querySelectorAll("button");

Array.from(btn).forEach(btn => {
    btn.addEventListener("click", () => console.log("clicked!"))
});

// html 에 여러 button 이 있다면 버튼 클릭마다 clicked를 콘솔에 출력함

