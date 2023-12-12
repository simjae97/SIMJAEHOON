carNumber = [];
startTime=[];
endTime=[];

function 입차(){
    console.log('입차가 완료 되었습니다.');
    //1.입력
    const carInput = document.querySelector('#carInput').value;
    const timeInput = document.querySelector('#timeInput').value;
    //3.출력
    if (carNumber.indexOf(carInput) == -1){
        if (carInput.length == 4 ){

            if(timeInput == ""){
                alert("입차시간을 입력해 주세요");
            }
            else{
                    //2.처리
            carNumber.push(carInput);
            startTime.push(timeInput);
            
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
        
            calc -= 31;
            alert(`주차요금은 ${parseInt(calc/10+1)*1000}원 입니다`);
        
    }
    else
    {
        alert("출입한 차량이 없습니다");
    }

}