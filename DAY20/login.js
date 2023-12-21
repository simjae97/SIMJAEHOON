// 1.로그인함수: 실행조건: 로그인 버튼을 클릭했을때

function 로그인(){
    console.log("로그인함수")
    const mid = document.querySelector("#mid").value;
    const mpw = document.querySelector("#mpw").value;
    const memberArray = JSON.parse( localStorage.getItem("memberArray"));
    const member = {mid:mid, mpw:mpw};
    
    for(let i = 0; i<memberArray.length; i++){
        let oldmember = memberArray[i];
        if (oldmember.mid == member.mid && oldmember.mpw == member.mpw ){
            alert("로그인 성공");
            return;
        }
    }
    alert("로그인실패");


    
}