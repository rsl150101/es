// 유저 세팅을 저장하는 함수가 있다 가정하고
// 기존 작성 방식은

function saveSettings(followAlert, unfollowAlert, mktAlert, themeColor){
    ///
}

saveSettings(true, true, false, "black")

// 이렇게 하면 어떤 인자에 뭘 넣는지 잘 알기도 힘들고 너무 김

// 더 나은 방식으로 고친다면

function saveSettings(settings){
    ///
}

saveSettings({
    follow : true,
    unfollow : false,
    mkt : false,
    color : "black"
});

// 위와 같이 개선할 수도 있다 하지만 함수를 호출하는 면에선 좋지만
// 함수를 작성하는 면에선 좋지 않다
// mkt 이 false 면 어떤 메시지를 보내준다 했을 때 
// settings.mkt 같은 식으로 값을 특정해서 써야한다
// 그리고 인자 하나는 다른 api로 보내야한다면 별도의 함수를 생성해서 호출해야함
// 인자 갯수가 일치하지 않으면 에러를 발생하기도 한다

// 위 문제점을 해결하기 위해 변수의 가독성을 높이고 변수의 기본 값을 설정한다
// 그러기 위해서 destructuring이 사용됨
// ES6 부턴

function saveSettings({follow, unfollow, color = "blue", mkt}) {
    ///
}

// 호출하는 함수에서 인자와 순서가 달라도 일치하는 인자에 값을 넣어준다