console.log(localStorage.getItem("이름"));
// console.log(_object.이름); // js는 html이 새로고침/바뀌면 초기화가 되므로 호출이 불가능
const 회원정보목록 = localStorage.getItem("회원정보목록");

console.log(회원정보목록[1].이름);

const 회원정보목록2 = JSON.parse(localStorage.getItem("회원정보목록2"));

console.log(회원정보목록2[1].이름);

/*
    웹 브라우저가 추가로 제공하는 API: 누군가가 미리 만든 객체/함수 = 도구

    
    js ----------------localStorage.setItem(키,JSON.stringfy(값))------------->브라우저 문자열만 저장이 가능
        페이지 전환[js초기화]

    js <-----------------JSON.parse(localStorage.getItem(키))------------------------
*/