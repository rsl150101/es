const box = document.querySelector(".box");

const addDiv = () =>{
    const div = document.createElement("div");
    const h1 = document.createElement("h1");

    h1.innerText = "Hello";
    h1.className = "title";
    div.append(h1);
    box.append(div);
};

// 기존의 JS에서 HTML을 추가하는 방법
// append 외에 appendChild 로도 자식 노드를 추가할 수 있지만 둘의 차이점은
// append는 노드 객체, DOMString(text)를 사용할 수 있고 여러 개의 자식 요소를 설정할 수 있다
// ex) box.append(div,h1,"Hello");
// appendChild는 노드 객체만 사용할 수 있으며 오직 하나의 노드만 추가할 수 있다

const addDiv = () =>{
    const div = `
        <div class = "hello">
            <h1 class = "title">Hello</h1>
        </div>
    `;
    box.innerHTML = div;
};

// `` 을 이용하여 html 문법을 사용할 수 있다