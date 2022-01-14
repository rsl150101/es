// .find
//find() 메서드는 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환 
// ex)
const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);
// 결과 값 : 12

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