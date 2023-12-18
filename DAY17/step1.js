// 전역변수 배열 : 너무 많아짐 , 관리가 힘들어짐
/*
객체지향 나오기전... 여러 속성들을 하나의 배열에서 관리하고싶다
1. borderArray = []하나의 배열에 서로다른 유형의 데이터를 저장 : 배열 관리가 힘듬
2. borderArray = ["작성자/비밀번호/제목/내용","작성자/비밀번호/제목/내용","작성자/비밀번호/제목/내용"]
여러 유형의 4가지 데이터를 하나의 문자열로 묶음, 단 구분이 있어야함[구분문자는 개발자 마음]
입력 데이터에는 구분 문자가 포함되면 안된다
단점: 분해를 해야하고 분해후 순서를 기억해야됨
*/ 
const writerArray = [];
const passwordArray = [];
const titleArray = [];
const contentArray = [];
// 1.글쓰기 [C] : 글쓰기 버튼을 클릭했을때.
function create(){ //매개변수:x 리턴값:x
    // html에서 값 입력받기
    const writer = document.querySelector("#writer").value;
    const password = document.querySelector("#password").value;
    const title = document.querySelector("#title").value;
    const content = document.querySelector("#content").value;
    // 배열에 저장하기
    const board = `${writer}/${password}/${title}/${content}`;
    writerArray.push(board);
    console.log(writerArray);
    readAll();
    return;
} 
// 2.모든 글출력[R]: 1.js가 열렸을떄, 2.글쓰기/글수정/글삭제 할때마다 
function readAll(){ //매개변수:x 리턴:x
    const tablebody = document.querySelector(`table > tbody`);
    
    let html = ``; 
    for (let i =0; i<writerArray.length; i++){
        html += `<tr>
                    <td>${ i+1 }</td>
                    <td>${ writerArray[i].split("/")[2] }</td>
                    <td>${ writerArray[i].split("/")[0] }</td>
                <tr/>`;
    }

    tablebody.innerHTML = html;


    return;
}
// 2-2.개별 글 출력[R]: 해당 글을 선택했을때
function readOnly(i){ //매개변수:해당 글의 식별 번호 리턴: x

    return;
}
// 3.글수정 [U] : 글 수정 버튼을 클릭했을때
function update(i){ // 매개변수: 수정할 식별번호 리턴: x

    return;
}
// 4.글 삭제 [D] 글 삭제 버튼을 클릭했을때
function del(i){ //매개변수: 삭제할 식별번호 리턴 :x


    return;
}



/*
    함수 만들때 고민할점
        1.언제 실행하는 함수인가
        2.넣을 매개변수
        3.리턴값
        4.무엇을 실행 하는 함수인지.
*/ 