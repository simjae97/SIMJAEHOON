let ParkIndex= JSON.parse(localStorage.getItem("ParkIndex"));
let parkArray= JSON.parse(localStorage.getItem("parkArray"));
if(!parkArray){
    parkArray=[];
    for ( let i =0; i<15; i++){
        parkArray.push({carNumber:"",enTime:""});
        localStorage.setItem(`parkArray`,JSON.stringify(parkArray));
    }
}


 
function park(j){
    let html = "";
    const topPark = document.querySelector(`#topPark`);
    html += `<div id="nows">지하${j+1}층</div>`;
    for(let i = j*5; i<5+j*5; i++){
        html += `<span onclick="sel(${i})" class="${parkArray[i].carNumber? `full`:``} ${ParkIndex==i?`select`:``}">${parkArray[i].carNumber?"차량번호 "+parkArray[i].carNumber+"이 주차됨":i+1 + "번째 주차장소"}</span>`
    }
    topPark.innerHTML = html;

}

park(0);

function sel(i){
    ParkIndex = i;
    localStorage.setItem(`ParkIndex`,ParkIndex)
    park(parseInt(i/5))
}





function 입차(){
    const cNum = document.querySelector("#cNum").value;
    let time = document.querySelector("#time").value;
    if(ParkIndex <0 || ParkIndex > parkArray.length){
        alert("오류가 일어났습니다.")
        return;
    }
    if(parkArray[ParkIndex].carNumber){
        alert("다른사람이 사용중인 장소입니다");
        return;
    }
    for(let i = 0; i<parkArray.length; i++){
        if(parkArray[i].carNumber == cNum){
            alert("이미 주차중인 차량입니다.")
            return;
        }
    }


    // time = time.split("-")[0]+time.split("-")[1]+time.split("-")[2].split("T")[0]+time.split("-")[2].split("T")[1].split(":")[0]+time.split("-")[2].split("T")[1].split(":")[1]
    console.log(time);
    parkArray[ParkIndex] ={
        carNumber : cNum,
        enTime : {year:Number(time.split("-")[0]),month :Number(time.split("-")[1]), day:Number(time.split("-")[2].split("T")[0]),hour:Number(time.split("-")[2].split("T")[1].split(":")[0]),min:Number(time.split("-")[2].split("T")[1].split(":")[1])}
    }

    localStorage.setItem(`parkArray`,JSON.stringify(parkArray));
    alert("주차성공");

    park(parseInt(ParkIndex/5));
}

function 층찾기(){
    const fNum = document.querySelector("#fNum").value;
    let index = parkArray.findIndex(i => i.carNumber == fNum);
    if(index >= 0){
        alert(`${fNum}은 ${index+1}번에 있으며 ${parseInt(index/5)+1}층에 있습니다`)
        park(parseInt(index/5)) 
        return;
    }
    alert("해당 차번이 존재하지 않습니다")
}

function 출차(){
    const cNum = document.querySelector("#cNum").value;
    let time = document.querySelector("#time").value;
    let index = parkArray.findIndex(i => i.carNumber == cNum);
    let price = 0;

    const calc ={
        cNum : cNum,
        entime : parkArray[index].enTime,
        oTime : {year:Number(time.split("-")[0]),month :Number(time.split("-")[1]), day:Number(time.split("-")[2].split("T")[0]),hour:Number(time.split("-")[2].split("T")[1].split(":")[0]),min:Number(time.split("-")[2].split("T")[1].split(":")[1])}
    }

    price = (calc.oTime.day-calc.entime.day)*24*60+(calc.oTime.hour-calc.entime.hour)*60+calc.oTime.min-calc.entime.min
    console.log(price);
    if (price < 0 ){
        alert("출차시간에 오류가 있는것 같습니다.");
        return;
    }

    calc.price = price-30>=0?parseInt((price-30)/10)*1000:0;
    // calc를 parkCalc에 전송
    let parkCalc= JSON.parse(localStorage.getItem("parkCalc"));
    if(!parkCalc){
        parkCalc=[];
    }
    parkCalc.push(calc);
    localStorage.setItem(`parkCalc`,JSON.stringify(parkCalc));
    // 배열 초기화
    parkArray[index].carNumber = "";
    parkArray[index].enTime ="";
    localStorage.setItem(`parkArray`,JSON.stringify(parkArray));
    park(parseInt(index/5));
    alert(`주차요금은 ${calc.price}원 입니다`)

}