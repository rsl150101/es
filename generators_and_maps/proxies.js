// Proxy 객체는 기본적인 동작(속성 접근, 할당, 순회, 열거, 함수 호출 등)의 새로운 행동을 정의할 때 사용합니다

const user ={
    username: "nico",
    age: 20,
    pw: 1234
};

const userFilter = {
    get: (target, prop, receiver) =>{
        return prop === "pw" ? `${"*".repeat(5)}` : target[prop];
    },
    set: () =>{
        console.log("Somebody wrote something");
    },
    deleteProperty:(target, prop) =>{
        if(prop === "pw"){
            return;
        }else{
            target[prop] = "Deleted";
        }
    }
}

const filteredUser = new Proxy(user, userFilter);
// user 의 기본적인 동작(get, set, ...)을 userFilter 로 정의할 수 있다

console.log(filteredUser.pw);
// > *****
// 새롭게 정의한 get 으로 인해 ***** 이 출력된다

delete filteredUser.username;
console.log(user);
// > {username: 'Deleted', age: 20, pw: 1234}
// 새롭게 정의한 delete 로 인해 username 을 Deleted로 덮어씌움