// 전역변수 배열 : 너무 많아짐 , 관리가 힘들어짐
/*
객체지향 나오기전... 여러 속성들을 하나의 배열에서 관리하고싶다
1. borderArray = []하나의 배열에 서로다른 유형의 데이터를 저장 : 배열 관리가 힘듬
2. borderArray = ["작성자/비밀번호/제목/내용","작성자/비밀번호/제목/내용","작성자/비밀번호/제목/내용"]
여러 유형의 4가지 데이터를 하나의 문자열로 묶음, 단 구분이 있어야함[구분문자는 개발자 마음]
입력 데이터에는 구분 문자가 포함되면 안된다
단점: 분해를 해야하고 분해후 순서를 기억해야됨
*/ 
// 객체 사용한 step1
const writerArray = [];

// 1.글쓰기 [C] : 글쓰기 버튼을 클릭했을때.
function create(){ //매개변수:x 리턴값:x
    // html에서 값 입력받기
    const writer = document.querySelector("#writer").value;
    const password = document.querySelector("#password").value;
    const title = document.querySelector("#title").value;
    const content = document.querySelector("#content").value;
    // 배열에 저장하기
    // step1에서는 직접 /를 이용해 구분해 하나로 만들었지만 이제는 객체를 이용해서 하나로 만듬
    const board = {작성자 : writer,
                    비밀번호:password,
                    제목:title,
                    내용:content};
    board.조회수 = 0;
    writerArray.push(board);
    console.log(writerArray);
    readAll();

    document.querySelector("#writer").value = " ";
    document.querySelector("#password").value = "";
    document.querySelector("#title").value =" ";
    document.querySelector("#content").value =" ";
    // 배열에 저장하기
    return;
} 
// 2.모든 글출력[R]: 1.js가 열렸을떄, 2.글쓰기/글수정/글삭제 할때마다 
function readAll(){ //매개변수:x 리턴:x
    const tablebody = document.querySelector(`table > tbody`);
    
    let html = ``; 
    for (let i =0; i<writerArray.length; i++){
        html += `<tr onclick="readOnly(${i})">
                    <td>${ i+1 }</td>
                    <td>${ writerArray[i].제목 }</td>
                    <td>${ writerArray[i].작성자 }</td>
                    <td>${writerArray[i].조회수}</td>
                <tr/>`;
    }

    tablebody.innerHTML = html;


    return;
}
// 2-2.개별 글 출력[R]: 해당 글을 선택했을때
function readOnly(i){ //매개변수:해당 글의 식별 번호 리턴: x
    console.log(i);
    const boardBox = document.querySelector(`#boardBox`);
    writerArray[i].조회수 += 1;
    // replaceAll(`교체할문자열`,`새로운 문자열 `);
    // html은 \n아닌 <br/>로 줄바꿈 하기에 값을 바꿈
    console.log(writerArray[i].내용.replaceAll(`\n` , `<br/>`))
    let html = `<div> 작성자:${writerArray[i].작성자}  조회수 : ${writerArray[i].조회수}</div>
                <div> 제목:${writerArray[i].제목} </div>
                <div> 내용:<br/>${writerArray[i].내용.replaceAll(`\n` , `<br/>`)} </div>
                <input type="button" onclick="update(${i})" value="수정" />
                <input type="button" onclick="del(${i})" value="삭제"/>
                `;

    boardBox.innerHTML = html;
    readAll()
    return;
}
// 3.글수정 [U] : 글 수정 버튼을 클릭했을때
function update(i){ // 매개변수: 수정할 식별번호 리턴: x
    console.log(i);

    // 1.패스워드 검증-패스워드를 입력받아 해당 게시물의 패스워드와 동일하면 
    const chkSum = prompt("비밀번호");
    if( chkSum == writerArray[i].비밀번호){
        const nTitle = prompt("수정할 제목");
        const nContent = prompt("수정할 내용");
        writerArray[i].제목 = nTitle;
        writerArray[i].내용 = nContent;
        // 새로고침
        writerArray[i].조회수 -= 1;
        readAll();
        readOnly(i);
        alert("수정 성공")
    }
    else{
        alert("수정 실패")
    }
    return;
}
// 4.글 삭제 [D] 글 삭제 버튼을 클릭했을때
function del(i){ //매개변수: 삭제할 식별번호 리턴 :x
    console.log(i);
    const chkSum = prompt("비밀번호");
    if( chkSum == writerArray[i].비밀번호){
        writerArray.splice(i,1);
        
        readAll();
        // const boardBox = document.querySelector(`#boardBox`);
        // let html = "";
        // boardBox.innerHTML = html;
        document.querySelector(`#boardBox`).innerHTML = "";
        alert("삭제 성공");
    }
    else{
        alert("삭제 실패");
    }
    return;
}



/*
    함수 만들때 고민할점
        1.언제 실행하는 함수인가
        2.넣을 매개변수
        3.리턴값
        4.무엇을 실행 하는 함수인지.
*/ 

