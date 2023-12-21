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
    let postArray= JSON.parse(localStorage.getItem("postArray"));
    if(!postArray){
        postArray=[];
    }
    postArray.push(board);
    localStorage.setItem(`postArray`,JSON.stringify(postArray));

    alert("등록완료");
    location.href="list.html"
    return;
} 