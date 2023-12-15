const 제품명 = [];
const 가격 = [];
const 수량 = [];

function 수정(i){
    console.log('수정함수 실행');
    //1.[입력]
    let retouch = document.querySelector(`.aaa${i}`);
    //2.[처리]
    retouch.style.display = "block";
    //3.[출력]
}
function 확인(i){
    //1.[입력]
    let retouch = document.querySelector(`.aaa${i}`);
    //2.[처리]
    retouch.style.display = "none";
    //3.[출력]
}
