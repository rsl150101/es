// super 키워드는 부모 오브젝트의 함수를 호출할 때 사용됩니다

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

class Admin extends User{
    constructor(id, email, pw, admin){
        super(id, email, pw);
        this.isAdmin = admin;
    }
    deleteProfile(id){
        console.log(`${id} has been deleted`);
    }
}

const superAdmin = new Admin("admin", "admin@com", 1234, true);

superAdmin.profile();
superAdmin.deleteProfile("kim");
console.log(superAdmin.isAdmin);

// super 함수는 base가 되는 class(여기선 User class)를 호출한다
// super 함수를 이용하여 constructor 메서드를 확장할 수 있다