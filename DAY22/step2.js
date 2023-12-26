document.addEventListener("DOMContentLoaded", function(){
    const header = document.querySelector("h1");
    // document.querySelector("h1") : 해당 요소를 객체로 호출
    // document.querySelector("h1").value : 해당요소에 입력된 값 호출
    // 단 value 입력관련 요소(input,select,textarea...)등
    // document.querySelector("h1").innerHtml : 해당 요소 사이의 html을 호출
    header.textContent = "HEADERS"; //DOM객체명.textContent : innerHTML
    header.style.color= 'white';    //DOM객체명.style.css속성명 = "값";
    header.style.backgroundColor = 'black';

    const headers = document.querySelectorAll("h1"); console.log(headers);
    const col = ['white','black','cyan','magenta']
    for (let i = 0; i<headers.length; i++){
        headers[i].textContent = `HEADERS${i}`
        headers[i].style.color = col[i]
        headers[i].style.backgroundColor = col[(i+1)%4]
    }
    // p.314
    const a = document.querySelector("#a");
    const b = document.querySelector("#b");

    a.textContent = `<h1>textContent속성 </h1>`
    b.innerHTML = `<h1>innerHtml 속성 </h1>`
})