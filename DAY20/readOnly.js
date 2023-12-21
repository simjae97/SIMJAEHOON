let i= Number(JSON.parse(localStorage.getItem("a")));
let postArray= JSON.parse(localStorage.getItem("postArray"));

function readOnly(){ //매개변수:해당 글의 식별 번호 리턴: x
    
    console.log(i);
    console.log(postArray[i]);

    const boardBox = document.querySelector(`#boardBox`);
    postArray[i].조회수 += 1;
    // replaceAll(`교체할문자열`,`새로운 문자열 `);
    // html은 \n아닌 <br/>로 줄바꿈 하기에 값을 바꿈


    let html = `<div> 작성자:${postArray[i].작성자}  조회수 : ${postArray[i].조회수}</div>
                <div> 제목:${postArray[i].제목} </div>
                <div> 내용:<br/>${postArray[i].내용.replaceAll(`\n` , `<br/>`)} </div>
                <input type="button" onclick="update(${i})" value="수정" />
                <input type="button" onclick="del(${i})" value="삭제"/>
                `;

    boardBox.innerHTML = html;
    localStorage.setItem(`postArray`,JSON.stringify(postArray));
    return;
    
}

readOnly();

function del(){
    if(Number(prompt("비밀번호를 입력해 주세요")) == postArray[i].비밀번호){
        postArray.splice(i,1);
        localStorage.setItem(`postArray`,JSON.stringify(postArray));
        location.href="list.html"
    }
    else{
        alert("ss");
    }
}

function update(){
    if(Number(prompt("비밀번호를 입력해 주세요")) == postArray[i].비밀번호){
        localStorage.setItem(`a`,i);
        location.href="edit.html"
    }
    else{
        alert("ss");
    }
}