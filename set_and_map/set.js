// Set 객체는 자료형에 관계 없이 원시 값(string, number , bigint , boolean, undefined, symbol, null)과 
// 객체 참조 모두 유일한 값을 저장할 수 있습니다

const aSet = new Set([1,2,3,4,5,6,7,7,7,7,8]);

console.log(aSet);

// >Set(8)
//  0: 1
//  1: 2
//  2: 3
//  3: 4
//  4: 5
//  5: 6
//  6: 7
//  7: 8

// set 내의 값은 유일해야 하기 때문에 값이 같은지 검사를 수행합니다
// 따라서 중복된 7들은 저장되지 않는다