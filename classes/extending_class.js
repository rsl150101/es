class User{
    constructor(id, email, pw){
        this.userId= id;
        this.userEmail = email;
        this.userPw = pw;
    }
    sayHello(){
        console.log(`Hello, my name is ${this.userId}`);
    }
    profile(){
        console.log(this.userId, this.userEmail, this.userPw);
    }
}

const aUser = new User("kim", "kim@com", 1234);

aUser.profile();

// class 를 확장하는 방법

class admin extends User{
    deleteProfile(id){
        console.log(`${id} has been deleted`);
    }
}

const superAdmin = new admin("admin", "admin@com", 1234);

superAdmin.profile();
superAdmin.deleteProfile("kim");

// > kim kim@com 1234
//   test.js:11 admin admin@com 1234
//   test.js:21 kim has been deleted

// 여기서 문제는 constructor 을 확장할려고 admin class 에 constructor 을 작성하면 SyntaxError가 발생한다
// extends 만으론 constructor 를 확장할 수 없기 때문이다
// class 의 constructor 메서드는 class 내 한개만 존재 가능하기 때문에 확장하기 위해선 super 함수가 필요하다  super.js에서 알아보자