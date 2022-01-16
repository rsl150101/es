// 이전의 spread 에서 ...을 찍어 변수를 전개시켰다
// rest parameter 또한 매개변수 앞에 ... 을 찍어 사용한다
// rest는 모든 값을 하나의 변수로 축소 시켜준다

const a = (...restParameter) => console.log(restParameter);

a("1", 2, true, "blablabla", ["a", "b", "c"], {name : "coding", age :20});

// > ['1', 2, true, 'blablabla', Array(3), {…}]
// rest는 array로 만든다

// 사용 예시
// 1. 객체 정리하기

const userInfo = {
    name : "kim",
    age : 20,
    password : 1234
};

const exceptPW = ({password, ...rest}) => rest;

const publicInfo = exceptPW(userInfo);
// > {name : "kim", age : "20"}

// 유저 정보에서 패스워드만 제거한 상태로 전송해줄 수 있다

// 2. 기본값 설정하기

const setCountry = ({ country = "kr", ...rest}) => ({country, ...rest});
// > {country: 'kr', name: 'kim', age: 20, password: 1234}

// 3. 속성(property)명 바꾸기

const rename = ({name : NAME, ...rest}) => ({NAME, ...rest});
// > {NAME: 'kim', age: 20, password: 1234}