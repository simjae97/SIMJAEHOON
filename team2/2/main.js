const 안산1관 = [{"어벤져스":["11:00","12:00"],"아쿠아맨":["13:00","14:00"]}]
const 안산2관 = [{"아쿠아맨":["11:00","12:00"],"디지몬":["13:00","14:00"]}]
const 수원1관 = [{"어벤져스":["11:00","12:00"],"번개맨":["13:00","14:00"]}]
const 수원2관 = [{"포켓몬":["11:00","12:00"],"피카츄":["13:00","14:00"]}]

const 안산영화관 ={
    주소:`안산시`,
    지점명:`안산영화관`,
    점장명:`심재훈`,
    일정: {
        '1관':안산1관,
        '2관':안산2관 } 
    
}

const 수원영화관 ={
    주소:`수원시`,
    지점명:`수원영화관`,
    점장명:`심재훈`,
    일정: {
        '1관':수원1관,
        '2관':수원2관 } 
    
}
const 영화관 = [안산영화관,수원영화관];

function 영화관목록(){
    let html = "";
    let tableDiv = document.querySelector('#cList');
    for (let i = 0; i<영화관.length; i++){
        html +=`<span onclick="상세(${i})">${영화관[i].지점명}, </span>`
    }
    tableDiv.innerHTML = html;
}

function 상세(i) {
    
    let html = "";
    let tableDiv = document.querySelector('#mList');
    let a = 영화관[i];
    for (const key in a.일정) {
        html += `<div>${key} :`;
        for (const movie in a.일정[key][0]){
            html += `<span onclick="hi('${i}','${movie}')">${movie},</span>`
        }
        html += `</div>`
    }
    
    tableDiv.innerHTML = html;
    
}
function hi(i, movie){
    let a = 영화관[i];
    let html = "";
    let tableDiv = document.querySelector('#mList2');
    for (const key in a.일정) {
        html += `<div>${key} :`;
        for (const movie2 in a.일정[key]){
            console.log(a.일정[key][movie2][movie])
            html += `<span>${a.일정[key][movie2][movie]},</span>`
        }
        html += `</div>`
    }
    tableDiv.innerHTML = html;
}
영화관목록()    