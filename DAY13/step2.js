let carNumber = [];
let rawTime = [];
let startTime=[];
let allCalc=[];

// 일일매출만 더 해보기
function 입차(){
    console.log('입차가 완료 되었습니다.');
    //1.입력
    const carInput = document.querySelector('#carInput').value;
    const timeInput = document.querySelector('#timeInput').value;
    //3.출력
    let timeInput2 = timeInput.split("T");
    let timeInput3 = timeInput2[0].split("-");
    let timeInput4 = "";
    for( let i = 0; i<timeInput3.length; i++){
        timeInput4 += timeInput3[i];
    }
    console.log(timeInput2[1]);
    if (carNumber.indexOf(carInput) == -1){
        if (carInput.length == 4 ){

            if(timeInput == ""){
                alert("입차시간을 입력해 주세요");
            }
            else{
                    //2.처리
            carNumber.push(carInput);
            startTime.push(timeInput2[1]);
            rawTime.push(timeInput4);
            alert('입차 완료');
            }
        }else{
            alert('차량 번호가 정상적이지 않습니다.');
        }
    }
    else{
        alert("이미 들어온 차량입니다.");
    }
        document.querySelector('#carInput').value='';
        document.querySelector('#timeInput').value='';
        
        console.log(carNumber);
        console.log(startTime);
        console.log(rawTime);
}

function login(){
    let id = document.querySelector('#carInput2').value; //차량번호 입력
    let pw = (document.querySelector("#timeInput2").value).split(":"); //끝나는 시간 시간:분을 시간,분으로 나눠 배열에 입력
    let dup = carNumber.indexOf(id); //차량번호의 인덱스 검색

    if (pw[0] == "" || pw[1] == "") //출차시간의 시:분중 하나라도 공백이 있으면 나옴
    {
        alert("출차시간을 입력해 주세요");
        return 0;
    }

    if (dup != -1)
    {
        let pw2 = startTime[dup].split(":"); // 차량번호의 인덱스와 같은 시작시간 시간:분을 시간 ,분으로 나눠서 배열에 입력
        let calc = 0;
        let stime = pw2.map(Number); //시작시간 넘버화
        let etime = pw.map(Number); //출차시간 넘버화
        if (etime[0] >= stime[0] )  //출차시간 - 입력시간 계산
        {
            if (etime[1]>= stime[1]){
                calc = (etime[0]- stime[0])* 60 + etime[1] - stime[1];
                console.log(calc);
            }
            else{
                calc = (etime[0]- stime[0]-1)* 60 + etime[1] -stime[1] + 60;
            }
        }
        else{
            if (etime[1]>= stime[1]){
                calc = (24+etime[0]- stime[0])* 60 + etime[1] - stime[1];
                console.log(calc);
            }
            else{
                calc = (23+ etime[0]- stime[0]-1)* 60 + etime[1] -stime[1] + 60;
            }
        }
        
        if (calc <= 30)
        {
            calc = 0;
            alert(`주차요금은 ${calc}원 입니다`);
        }
        else{
            calc -=31;
            calc = parseInt(calc/10+1)*1000
            alert(`주차요금은 ${calc}원 입니다`);
        }
    if (!allCalc[rawTime[dup]]) {
            allCalc[rawTime[dup]] = 0;
    }
    allCalc[rawTime[dup]] += calc;
    console.log(allCalc[rawTime[dup]]);

    startTime.splice(dup,1);
    carNumber.splice(dup,1)
    rawTime.splice(dup,1);
    console.log(startTime);
    console.log(carNumber);
    console.log(rawTime);


        
    }
    else
    {
        alert("출입한 차량이 없습니다");
    }
    let array ="";
    for(let i = 0; i< allCalc.length; i++ ){
        if(allCalc[i]){
            array += `<li> ${i}의 총 매출: ${allCalc[i]} </li>` 
        }
    }
    document.querySelector("ul").innerHTML = array;
}
