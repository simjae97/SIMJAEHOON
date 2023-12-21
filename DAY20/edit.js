
let postArray= JSON.parse(localStorage.getItem("postArray"));
let i= Number(JSON.parse(localStorage.getItem("a")));

function edit(){ //매개변수:x 리턴값:x
    // html에서 값 입력받기
    const writer = document.querySelector("#writer").value;
    const password = document.querySelector("#password").value;
    const title = document.querySelector("#title").value;
    const content = document.querySelector("#content").value;
    // 배열에 저장하기
    // step1에서는 직접 /를 이용해 구분해 하나로 만들었지만 이제는 객체를 이용해서 하나로 만듬

    postArray[i].작성자 = writer;
    postArray[i].비밀번호 = password;
    postArray[i].제목 =title
    postArray[i].내용 =content;

    localStorage.setItem(`postArray`,JSON.stringify(postArray));
    alert("수정완료")
    location.href="readOnly.html"
    return;
} 

function dd(){
    let html = '';
    const body = document.querySelector(`body`);
    html = `<h3> 수정하기 </h3>
    <form>
        작성자: <input id="writer" type="text" value="${postArray[i].작성자}"/> <br/>
        비밀번호:<input id="password" type="password" value="${postArray[i].비밀번호}" disabled/> <br/>
        제목:<input id="title" type="text" value ="${postArray[i].제목}"/> <br/>
        내용:<textarea id ="content">${postArray[i].내용.replaceAll('\n' , '<br/>')}</textarea> <br/>
        <input onclick="edit()" type="button" value="수정"/>
    </form>`
    body.innerHTML = html;
}
dd();