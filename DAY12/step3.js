console.log("js열림"); //.js 실행이 안되는지 되는지 확인
//1. 파일 경로문제

const 회원배열 =[];  //여러 회원 이름을 저장하는 배열
// 배열을 위에 선언한 이유
    // 1.선언은 한번만 되어야한다.
    // 2.여러 {}안에서 사용하기 위해 전역변수 사용.

function 회원등록(){
    console.log("회원등록함수 실행")
    let value1 = document.querySelector('#nameInput').value;
    console.log(value1);
    // 처리
    /*
     if( 회원배열.indexOf( name ) >= 0 ){ alert('현재 등록된 이름입니다.[중복]');    return; }
        if( name.length != 3 ){ alert('회원명 3글자로 입력해주세요.'); return; }
        if( !isNaN(name[0]) || !isNaN(name[1]) || !isNaN(name[2] ) ){ alert('숫자를 입력할수 없어요.'); return;}
    */ 
    //부가기능2: 만약에 입력받은 이름이 이미 배열에 존재하면
    // 출력
    //1.if 중복이면 push하지말기
    if (회원배열.indexOf(value1) == -1){
        // 2. 회원명은 2~4글자
        if(value1.length >= 2 && value1.length<=4){
            let a = 0;
            //isNaN (NaN:not a number) 숫자인지 아닌지 판단 숫자이면 false 문자이면 true
            /*  if(isNaN(value1[0])&& isNaN(value1[1])&& isNaN(value[2]) )
             */
            for( const key of value1){
                if (Number(key)*0 == 0){ //isNaN(key)
                    a++;
                }
            }

            if (a == 0)
            {
                회원배열.push(value1);
            }
            else{
                alert("숫자입력불가능");
            }

        }

        else{
            alert("이름은 2에서 4글자까지만 허용됩니다.");
        }
    }

    else{
    
        alert("중복입니다.");
    
    }
    
    console.log(회원배열);
    
    document.querySelector('#nameList').innerHTML = 회원배열;
    // 4부가기능
        //1.등록후 input상자 초기화
    document.querySelector("#nameInput").value="";
}

function 회원삭제(){
    // 입력
    console.log("회원삭제함수 실행")
    let value1 = document.querySelector('#nameInput').value;
    console.log(value1);
    // 처리
    let index = 회원배열.indexOf(value1); //삭제할 인덱스 위치
    if ( index != -1){
        회원배열.splice(index,1);
    }
    else
    {
        alert("없는 회원명입니다");
    }
    console.log(회원배열);
    // 출력
    document.querySelector('#nameList').innerHTML = 회원배열;
    // 4부가기능
        //1.등록후 input상자 초기화
    document.querySelector("#nameInput").value="";
}
// document = HTML전체
//  querySelector("선택자")
    //.innerHtml : <마크업> 이부분을 의미 </마크업>

    // 지역변수 특징
        //  {}안에서 선언된 변수/상수는 {}밖으로 나갈수 없다
        // {}안에서 선언된 변수/상수는 하위{}으로 들어갈 수 있다