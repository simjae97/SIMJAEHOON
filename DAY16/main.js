const 제품명 = [];
const 가격 = [];
const 수량 = [];
let 매출 = 0;
const 구매날짜=[];
const 구매제품명=[];
const 구매가격=[];

function 등록(){
    //1.입력
    const itemName = document.querySelector('#itemName').value;     
    const itemPrice = document.querySelector('#itemPrice').value;
    const itemCnt = document.querySelector('#itemCnt').value;

    if( itemName.length <= 0 || itemPrice.length <= 0 || itemCnt.length <= 0){alert('입력해주세요'); return;}
    if( 제품명.indexOf(itemName) >= 0){alert('등록된 제품입니다.'); return;} 
    if(isNaN(itemPrice) == true){alert('가격에 숫자를 입력해주세요.'); return;}
    if(isNaN(itemCnt) == true){alert('수량에 숫자를 입력해주세요.'); return;}
                
    //2.처리
    제품명.push(itemName); 
    가격.push(itemPrice);
    수량.push(itemCnt);
    console.log(제품명)
    console.log(가격)
    console.log(수량)
  
    //3.출력
    document.querySelector('#itemName').value ='';
    document.querySelector('#itemPrice').value =''; 
    document.querySelector('#itemCnt').value ='';

    출력();
}
function 출력(money){
    let html = "";
    let tableDiv = document.querySelector('table tbody');
    for(let i = 0; i<제품명.length; i++){
        html += `
                <tr class='${수량[i] > 0 ? '': "soldOut"}'>
                    <td>${제품명[i]}</td>
                    <td>${가격[i]}원</td>
                    <td>${수량[i] > 0 ? 수량[i]: "품절"}</td>
                    <td><input onclick="구매(${i})" type="button" value="구매"></td>
                    <td><input onclick="수정(${i})" type="button" value="수정"></td>  
                    
                </tr>
                <tr class="retouch open${i}">
                <td>
                    <input id="name${i}" type="text" placeholder="수정할 제품명">
                </td>
                <td>
                    <input id="price${i}" type="text" placeholder="수정할 가격">
                </td>
                <td>
                    <input id="siu${i}" type="text" placeholder="수정할 수량">
                </td>
                <td>
                    <input onclick="확인(${i})" type="button" value="확인">
                </td>
            </tr>
                `
    }
    html += `<table id="table2">`

    tableDiv.innerHTML = html;

    let sumDiv = document.querySelector('#sum');
    if(money == 0){money = 0}
    console.log(`ㅇㅇ :${매출}`);
    sumDiv.innerHTML = `총 매출 : ${rework(매출)}원`;
}

function rework(n){ //쉼표넣기
    let a = String(n);
    for ( let i = a.length-3; i>0; i -=3){ //뒤에서 세번째 자리수부터, 3자리주기이니 3자리마다 반복
        a =a.substring(0,i)+","+a.substring(i); //0~i번째 문자열+','+i~끝문자열
    }
    return a;
}

function 총매출( i ){
    매출 += Number(가격[i]);
}

function 구매( i ){
    
    수량[i] -= 1 ;
    총매출(i);
    출력(i);
}

function 수정(i){
    let retouch = document.querySelector(`.open${i}`);

    retouch.style.display = "table-row";

}
//확인 함수
function 확인(i){
    let retouch = document.querySelector(`.open${i}`);
    let a =document.querySelector(`#name${i}`).value;
    let b = document.querySelector(`#price${i}`).value;
    let c =document.querySelector(`#siu${i}`).value;
    if(a && b&& c){
        제품명[i] = document.querySelector(`#name${i}`).value;
        가격[i] = document.querySelector(`#price${i}`).value;
        수량[i] = document.querySelector(`#siu${i}`).value;
    }
    else{
        alert("값을 입력해 주세요")
    }
    retouch.style.display = "none";

    출력();
}

function 구매내역출력(){
    let html2 = "";
    let table2 = document.querySelector('#table2 tbody');
    for(let i = 0; i<구매제품명.length; i++){
        html2 += `
                <tr>
                    <td>${구매날짜[i]}</td>
                    <td>${구매제품명[i]}</td>
                    <td>${구매가격[i]}원</td>
                </tr>
                `
    }

    table2.innerHTML = html2;

}

function 구매(i){
    const date = prompt('날짜를 입력해주세요 ex)yyyy-mm-dd')
    if (date[4] =="-" && date[7] == "-" date.length == 10){
        구매날짜.push(date); console.log(구매날짜);
        구매제품명.push(제품명[i]); console.log(구매제품명);
        구매가격.push(가격[i]); console.log(구매가격);
        
    }
    let date2 = date.split("-");
    //출력
    구매내역출력();

}
