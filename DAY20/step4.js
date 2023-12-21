// 1.등록함수:실행조건:등록버튼을 눌렀을때
// let i =0;
// function 시작(){
//     let memberArray = [];
//     localStorage.setItem(`memberArray`,JSON.stringify(memberArray));
// }
function 등록(){
    // 1.입력
    const mid = document.querySelector("#mid").value;
    const mpw = document.querySelector("#mpw").value;
    // 2.처리
       //아이디와 비밀번호를 합쳐서 회원이라는 객체화
    const member ={
        mid : mid,
        mpw : mpw
    }
    // 객체를 배열에 저장 ,전역변수가 아닌 브라우저에 저장
    // localStorage에 입력받은 객체를 저장한다
    
    let memberArray= JSON.parse(localStorage.getItem("memberArray"));
    if(!memberArray){
        memberArray=[];
    }
    memberArray.push(member);
    localStorage.setItem(`memberArray`,JSON.stringify(memberArray));
    // i++;
    // localStorage.setItem('useri' , `${i}`);


    //3.출력
    alert("회원가입 성공")
}