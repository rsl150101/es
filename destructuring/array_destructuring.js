const days = ["Mon", "Tue", "Wed"];

// 기존의 배열의 요소를 불러올려면

const day1 = days[0];
const day2 = days[1];
const day3 = days[2];

// 이와 같이 각각의 변수에 배열 내 찾는 값의 인덱스를 찾아서 할당 시켜줘야 했다.

//하지만 ES6부턴

const [day1, day2, day3, day4 = "Thu"] = days;

// default 값을 줘서 배열 내 존재하지 않는 값도 할당할 수 있다
// days가 함수이고 배열을 반환해도 사용가능하다
// 예를 들어

const days = () => ["Mon", "Tue", "Wed"];
const [day1, day2, day3, day4 = "Thu"] = days();

// 위와 동일함