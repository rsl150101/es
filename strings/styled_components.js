// styled compoents 는 Javascript 파일 내에서 CSS를 사용할 수 있게 해주는 대표적인 CSS-in-JS 라이브러리로 React 프레임워크를 주요 대상으로 한 라이브러리
// 이 코드는 라이브러리를 사용한 게 아니며 어떤 방식으로 사용되는지 알기 위한 코드

const styled = element =>{
    const el = document.createElement(element);
    return args =>{
        const styles = args[0];
        el.style = styles;
        return el;
    };
};

const title = styled("h1")`
    border-radius: 10px;
    color: blue;    
`;

title.innerText = "Hello"

document.body.append(title);

// 결과 값 : <h1 style = "border-radius: 10px; color: blue;"></h1>