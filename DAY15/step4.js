let date = [];
let todo = [];
let money =[];
let date2 = [];

function rework(n){
    let a = String(n);
    for ( let i = a.length-3; i>0; i -=3){
        a =a.substring(0,i)+","+a.substring(i);
    }
    return a;
}
function calc(){
    let total = 0;
    for (let i = 0; i<money.length; i++){
        total += Number(money[i]);
    }
    return total;
}
function sort(){
    let sortDate = date2.map(Number);
    for (let i = sortDate.length-1; i >0; i--) {
        for (let j = 0; j < i; j++) {
            if (sortDate[j] > sortDate[j+1]) {
                // money 배열의 요소 교환
                let tempMoney = money[j];
                money[j] = money[j+1];
                money[j+1] = tempMoney;
    
                // todo 배열의 요소 교환
                let tempTodo = todo[j];
                todo[j] = todo[j+1];
                todo[j+1] = tempTodo;
    
                // date 배열의 요소 교환
                let tempDate = date[j];
                date[j] = date[j+1];
                date[j+1] = tempDate;

                let tempdate2 = date2[j];
                date2[j] = date2[j+1];
                date2[j+1] = tempdate2;

                let tempSort = sortDate[j];
                sortDate[j] = sortDate[j+1];
                sortDate[j+1] = tempSort;
            }
        }
    }
    
}
function listRe(){ //등록,변경,삭제후 배열의 최신상태를 html에 대입한다
    let html =`<table> <th> 날짜 </th> <th> 항목</th> <th>금액</th><th>비고</th>`;
    const bot = document.querySelector(`#bot`);
    for (let i= 0; i<date.length; i++){
        html += `<tr><td>${date[i]}</td><td>${todo[i]}</td><td>${rework(money[i])}원 </td><td><input onclick="del(${i})" type="button" value="삭제"></td></tr>`
        }
    html += `</table> <div id ="tableunder">총 합계:${rework(calc())}원</div>`
    // 3.대입 
    bot.innerHTML=html;
    


}

function input(){
    console.log("인풋함수 실행");
    const content1 = document.querySelector(`#date`).value;
    const content2 = document.querySelector(`#value`).value;
    const content3 = document.querySelector(`#money`).value;
    let time = content1.split("-");
    let time2 = time[0]+ time[1]+ time[2];
    if(content1 == "" || content2=="" || content3 == ""){
        alert("입력되지않은 값이 존재합니다")
    }
    else{
        date2.push(time2);
        date.push(content1);
        todo.push(content2);
        money.push(content3);
        console.log(money);
        sort();
        listRe();
    }
    document.querySelector(`#date`).value=``;
    document.querySelector(`#value`).value=``;
    document.querySelector(`#money`).value=``;

}

function del(n){
    if(confirm("정말 제거하시겠습니까?")){
        date.splice(n,1);
        todo.splice(n,1);
        money.splice(n,1);
        listRe()
    }
    else{
        alert("제거취소");
    }

}