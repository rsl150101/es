const settings = {
    notifications:{
        follow : true,
        alert: true,
        unfollow: false
    },
    color : {
        theme : "dark",
        background : "red"
    }
};

const {color : {theme : chosenColor ="light"}} = settings;

// 데이터를 api로부터 받고 데이터 이름을 변경하고 싶다면
// 변수 : 변경할 이름 으로 변경할 수 있다

// 또는 이미 존재하는 let 변수를 덮어쓸 수 있다

let overwriteColor = "blue";

({color: { background : overwriteColor = "light"}} = settings);
