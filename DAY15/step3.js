// 전역자료
const todoList = []; //할일의 내용 저장
const todoSit = []; //할일의 상태 저장
// 지역자료

function listRe(){ //등록,변경,삭제후 배열의 최신상태를 html에 대입한다
    let html =``;
    const bot = document.querySelector(`#todoBottom`);
    for (let i= 0; i<todoList.length; i++){
        html += `<div class="todo ${todoSit[i] ? 'success' : '' }">
                    <div class="content"> ${todoList[i]}</div>
                    <div class="btnBox">
                        <input onclick="변경함수(${i})" type="button" value="${todoSit[i] ? "다시하기":"완료"}"/>
                        <input onclick="삭제함수(${i})" type="button" value="삭제"/>
                    </div>
                </div>`
        }
    // 3.대입 
    bot.innerHTML=html;


}

// 1.등록함수 :매개변수= x,리턴x
function 등록함수(){
    console.log("등록함수 실행")
    // 1.입력
    const content = document.querySelector(`#content`).value;
    console.log(content);
    // 2.처리
    todoList.push(content);
    todoSit.push(false); //할일의 상태를 입력받지 않고 초기값을 임의로 false
    console.log(todoList);
    console.log(todoSit);
    // 3.출력
    // 1.어디에 todoBottom
    // 2.무엇을 배열에 있는 요소들을 html화 시켜서
    listRe();



    //입력후 초기화, 등록성공 적기
    document.querySelector(`#content`).value=``; alert("등록 성공");
}


// 2.상태변경함수:매개변수 = 변경할 인덱스,리턴x
function 변경함수(매개변수){
    console.log(`변경함수 실행 ${매개변수}`);
    // 1.입력
    // 2.처리
    todoSit[매개변수] = !todoSit[매개변수];
    // 3.출력 //현재 위에서 출력된 화면을 다시출력 = 재 렌더링
    listRe();
}


// 3.삭제함수:매개변수 = 삭제할 인덱스,리턴x
function 삭제함수(매개변수){
    console.log(`삭제함수 실행 ${매개변수}`);
    // 1.입력
    // 2.처리
    if (todoSit[매개변수]) {
        todoList.splice(매개변수,1);
        todoSit.splice(매개변수,1);
    }
    else{
        alert("완료 전까지는 끌 수 없습니다");
    }
    // 3.출력
    listRe();
}

/*
과제
1.DAY15 step3 todo 확인[1명씩]
2.개인과제 day15 step4.html, css, js
    주제: 가계부(등록함수,출력함수,수정함수)
    [요구사항]
            조건 배열3개
            1.입력: 날짜,항목,금액 [3가지 항목] 입력 후 등록버튼 클릭하면 저장.
            2.출력: 날짜,항목,금액 
                                저장된 배열 내 모든 요소의 값을 그림과 같이 출력+총합계
            3.삭제:선택된 항목을 삭제시[3가지 항목] 같이 삭제
=======================추가 요구사항====================================================
    1.css 간단히
    2.천단위 쉼표 만드는함수(js직접만들기, 외부 라이브러리 사용x)
    3.날짜를 무작위로 등록해도 날짜 오름차순 출력

*/ 