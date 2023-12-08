// if문 연습문제
// prompt대신에 input으로 입력받기
// 풀이결과를 span에 입력

// 문제1: 세 정수를 입력받아 총점과 평균을 span에 출력
/*
1.document.querySelector("마크업 #id명 .class명")
2. document.querySelector("마크업 #id명 .class명").value
3.document.querySelector('.dd').innerHTML =
*/ 
function clickButton1(){
    // input에 입력받은 값 가져오기
    let value1 = Number(document.querySelector('#input1').value);
    let value2 = Number(document.querySelector('#input2').value);
    let value3 = Number(document.querySelector('#input3').value);
    // 2.처리
    let sumValue= value1+value2+value3;
    let avgValue = sumValue/3;
    // 3. 출력
    document.querySelector('#result1').innerHTML = `합계${ sumValue},평균${avgValue}`;

}

function clickButton2(){
    // input에 입력받은 값 가져오기
    let value1 = Number(document.querySelector('#input1').value);
    let value2 = Number(document.querySelector('#input2').value);
    let value3 = Number(document.querySelector('#input3').value);
    // 2.처리
    if (value1 > value2){
        document.querySelector('#result1').innerHTML = ` ${value1}가 더큽니다`;
    }
    else{
        document.querySelector('#result1').innerHTML = ` ${value2}가 더큽니다`;
    }

}

//문제 3 : 3개의 정수[입력값1/2/3] 를 입력받아서 가장 큰수를 출력 
function clickButton3(){
    // input에 입력받은 값 가져오기
    let value1 = Number(document.querySelector('#input1').value);
    let value2 = Number(document.querySelector('#input2').value);
    let value3 = Number(document.querySelector('#input3').value);
    let result = 0;
    // 2.처리
    if (value2 > value1){
        if(value3>value2){
            result = value3;
        }
        else{
            result = value2;
        }
    }
    else{
        if(value3>value1){
            result = value3;
        }
        else{
            result = value1;
        }
    }
    // 3. 출력
    document.querySelector('#result1').innerHTML = `가장 큰 값${result}`;

}

//문제 4 : 1개의 점수[입력값1] 를 입력받아 점수 90점이상 합격 출력 아니면 탈락 출력 
function clickButton4(){
    // input에 입력받은 값 가져오기
    let value1 = Number(document.querySelector('#input1').value);
    let result = 0;
    // 2.처리
    if (value1 >= 90){
        result ="합격";
    }
    else{
        result="탈락";
    }
    // 3. 출력
    document.querySelector('#result1').innerHTML = `결과${result}`;

}
/*문제 5 : 점수[입력값1]를 입력받아 점수 90점이상 A등급 출력 
                            80점이상 B등급 출력 
                            70점이상 C등급 출력  
                            그외 재시험
    
*/

function clickButton5(){
    // input에 입력받은 값 가져오기
    let value1 = Number(document.querySelector('#input1').value);
    let result = 0;
    // 2.처리
    if (value1 >= 90){
        result ="A등급";
    }
    else if (value1 >= 80){
        result="B등급";
    }
    else if (value1 >= 70){
        result="C등급";
    }
    else{
        result="재시험";
    }
    // 3. 출력
    document.querySelector('#result1').innerHTML = `결과${result}`;

}
/*문제 6: 아이디[입력값1] 와 비밀번호[입력값2] 입력받기 
                   회원아이디가 admin 이고 비밀번호가 1234 이면 로그인 성공 출력 아니면 로그인실패 출력
*/
function clickButton6(){
    // input에 입력받은 값 가져오기
    let value1 = document.querySelector('#input1').value;
    let value2 = document.querySelector('#input2').value;
    let result = "로그인 실패";
    // 2.처리
    if (value1 =="admin"){
        if (value2=="1234"){
            result = "로그인 성공";
        }
    }
    // 3. 출력
    document.querySelector('#result1').innerHTML = `결과${result}`;

}

//문제 7 : 3개의 정수[입력값1/2/3] 를 입력받아서 오름차순 / 내림차순 출력
function clickButton7(){
    // input에 입력받은 값 가져오기
    let value1 = Number(document.querySelector('#input1').value);
    let value2 = Number(document.querySelector('#input2').value);
    let value3 = Number(document.querySelector('#input3').value);
    // 2.처리
    let max,min,mid=0;
    if(value2 > value1){
        if(value3>value2){
            max = value3;
            mid = value2;
            min = value1;
        }
        else{
            max= value2;
            if(value3>value1){
                mid = value3;
                min = value1;
            }
            else{
                mid = value1;
                min = value3;
            }
        }
    }
    else{
        if(value3>value1){
            max = value3;
            mid = value1;
            min = value2;
        }
        else{
            max=value1;
            if(value3>value2){
                mid = value3;
                min = value2;
            }
            else{
                mid = value2;
                min = value3;
            }
        }
    }

    document.querySelector('#result1').innerHTML = `오름차순 : ${min} ${mid} ${max}\n 내림차순: ${max} ${mid} ${min}`;
}

function clickButton8(){
    // input에 입력받은 값 가져오기
    let value1 = Number(document.querySelector('#input1').value);
    let value2 = Number(document.querySelector('#input2').value);
    let value3 = Number(document.querySelector('#input3').value);
    // 2.처리
    if (value2 < value1){
        value1 = value1^value2;
        value2 = value2^value1;
        value1 = value1^value2;
    }
    if (value3 < value2){
        value2 = value2^value3;
        value3 = value3^value2;
        value2 = value2^value3;
    }
    if (value2 < value1){
        value1 = value1^value2;
        value2 = value2^value1;
        value1 = value1^value2;
    }

    document.querySelector('#result1').innerHTML = `오름차순 : ${value1} ${value2} ${value3}\n 내림차순: ${value3} ${value2} ${value1}`;
}