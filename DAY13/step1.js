console.log("hi")
// 여러 함수중괄호에서 사용하기 떄문에 밖으로 뺌
// 1. id들을 저장하는 배열
const idArray =['id1','id2','id3','id4','id5'];
// 2. pw들을 저장하는 배열
const pwArray = ['pw1','pw2','pw3','pw4','pw5'];

// 1.회원가입 함수
function sign(){
    console.log("회원등록함수 실행")
    let id = document.querySelector('#nameInput').value;
    let pw = document.querySelector("#pwInput").value;
    let dup = idArray.indexOf(id);
    if (dup == -1){
        idArray.push(id);
        pwArray.push(pw);
        alert("회원가입 완료");
    }
    else{
        alert("이미 사용중인 아이디입니다.");
    }
    console.log(idArray);
    console.log(pwArray);
    document.querySelector("#nameInput").value="";
    document.querySelector("#pwInput").value="";
}

// 2.로그인 함수
function login(){
    let id = document.querySelector('#nameInput2').value;
    let pw = document.querySelector("#pwInput2").value;
    let dup = idArray.indexOf(id);
    if (dup != -1){
        if (pwArray[dup] == pw){
            alert("로그인 성공");
        }
        else{
            alert("비밀번호가 다릅니다");
        }
    }
    else{
        alert("없는 아이디입니다.");
    }
    document.querySelector("#nameInput2").value="";
    document.querySelector("#pwInput2").value="";
}

// 3.업데이트 함수
function rename(){
    let id = document.querySelector('#nameInput3').value;
    let pw = document.querySelector("#pwInput3").value;
    let newId = document.querySelector('#nameInput4').value;
    let newPw = document.querySelector("#pwInput4").value;
    let idIndex = idArray.indexOf(id);
    let check = idArray.indexOf(newId);

    console.log(check);
    console.log(idIndex);
    
    if(idIndex != -1){
        if (check == -1 || idIndex == check ){
            if(pwArray[idIndex] == pw)
            {   
                idArray[idIndex] = newId;
                pwArray[idIndex] = newPw;
                alert("변경 성공");
            }
            else{
                alert("현재 비밀번호가 다릅니다.");
            }
        }
        else{
            alert("이미 있는 아이디입니다.");
        }
    }
    else{
        alert("존재하지 않는 아이디입니다.");
    }
    console.log(idArray);
    console.log(pwArray);
    document.querySelector("#nameInput3").value="";
    document.querySelector("#pwInput3").value="";
    document.querySelector("#nameInput4").value="";
    document.querySelector("#pwInput4").value="";
}
//4.제거함수
function del(){
    let id = document.querySelector('#nameInput5').value;
    let pw = document.querySelector("#pwInput5").value;
    let dup = idArray.indexOf(id);
    if (dup != -1){
        if (pwArray[dup] == pw){
            idArray.splice(dup,1);
            pwArray.splice(dup,1);
            alert("삭제완료");
        }
        else{
            alert("아이디와 패스워드가 맞지않습니다");
        }
    }
    else{
        alert("존재하지 않는 아이디입니다");
    }
    console.log(idArray);
    console.log(pwArray);
}

/*
    js과제 [주차장 정산기]
    요구사항
    1.입차
            1.차번호 숫자4자리로 입력 (input type = text)
            2.일차시간을 (input type=time)
    
    2.저장
            배열[차번호,입찰시간] 에 저장

    3.출차
            1.차번호 숫자 4자리 입력받기 type="text"
            2.출차시간을 type="time"
            
    4.계산
        해당 차번호의 입차시간과 출차 시간을 계산해서
        30분내외면 무료, 10분당 천원으로 계산

    5.출력
        alert(요금)
        또는
        입차한 차량이 없습니다.

=========추가 요구사항 =================
    1.입차/출차시 차량번호 4자리 유효성 검사 (4자리 아니면 입차 불가능)
    2.입차/출차시간을 입력 안했으면 입차/출차 불가능
    3.일별 매출 현황 출력

*/