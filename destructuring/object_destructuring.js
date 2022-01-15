// destructuring 은 object나 array 그 외 요소들 안에 변수를 바깥으로 끄집어 내서 사용할 수 있게 함

const settings = {
    notifications:{
        follow : true,
        alert: true,
        unfollow: false
    },
    color : {
        theme : "dark"
    }
};

// settings 를 예전 방식으로 꺼내 쓰고자 한다면

const follow = settings.notifications.follow;
const color = settings.color;
// 이런식으로 지저분하고 객체 안에 있는 요소들을 꺼내 쓰기 위해서 객체 내 키를 찾아서 매칭 시켜줘야 했다.

// ES6부턴

const {notifications : {follow}, color} = settings;
// 타겟 대상 object인 settings 의 color 와 notifications 안 follow 로 접근
// 이런 방식은 큰 오브젝트에서 특정 변수나 그 안에 속한 작은 오브젝트에 접근할 수 있다

const { title : {text = "Hello"} = {}} = settings;
// 타겟 대상 object인 settings 의 title로 접근해 빈 객체를 생성하고 그 안에 text의 리터럴 값 Hello 할당
// 이런식으로 default 값을 설정할 수 있다

// 참조 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment