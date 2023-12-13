/*  
    [배열, 객체,자료]
    1.for(let i = 0; i<배열명.length; i++){}
    2.for(let i in 배열명){}
    3.for(let v of 배열명){}

    4.while문
        while(조건){실행}
        1.for 처럼 사용(빈도 적음)
        초기값
        while( 조건문) {실행문; 증감식;}

        2.무한루프(빈도 높음)
            while(true){실행문;}
            for(;;){실행문;}

            -break 키워드: 특정 조건이 되면 무한루프 종료
*/ 

const todos = ['우유 구매', '업무 메일 확인하기', '필라테스 수업'];

// 1. i는 0부터 마지막 인덱스까지 1씩 증가하면서 console.log 반복 실행
for( let i = 0; i<todos.length; i++){
    console.log(`${i+1}번째는 ${todos[i]}`);
}

// 2. i는 todos배열 내 요소의 인덱스를 하나씩 대입 받으면서 console.log 반복 실행
for(let i in todos){
    console.log(todos[i]);
}

// 3 v는 todos 배열 내 요소의 value를 하나씩 대입 받으면서 console.log 반복 실행
for (let v of todos){console.log(v);}


// 4 i는 0부터 마지막 인덱스까지 console.log 출력후 증감
let i =0;
while(i<todos.length){ console.log(todos[i]); i++}
i = 0;
while(true){ if(i<todos.length){console.log(todos[i]); i++} else{break;}}


// let j = 0;
// while(1){alert(`${j}번째 반복중입니다.`); j++;}

// for (let j =0; true ; j++){
//     alert(`${j}번째 반복입니다`);
// }

// for(;true;){alert("dd")}
// while(1) { alert("dd");}

// let p = 1;

// while(confirm("계속 진행할까요?")){ //확인 = true, 취소 = false
//     alert(`${p}번째 반복입니다.`)
//     p++
// }

/*  
    함수
        1.남이 만든 함수 : alert(), confirm(), push(), splice()
        2.내가 만든 함수: 회원등록(), 로그인()
    
    상자 안에 들어있는 수 -> 상자안에 들어있는 코드 -> {}안에 들어있는 코드 

    재활용 하기위해 사용
    1.매개변수/인자/인수
    2.리턴/결과/반환


*/ 

// p.184
// for(let m = 0; true; m++){ //무한 루프
//     alert(`${m}번째 반복입니다.`);
//     const isContinue = confirm("계속 할까요");
//     if(!isContinue) {break;} // 가장 가까운 for/while 탈출

// } //무한루프 end

// for(){ 1번 for
//     for(){ 2번 for 
//         break;  <<= 2번 for문 탈출
//     }
// }

// p.185
for (let m=0; m<5; m++){
    continue; // 반복작업을 멈추고 반복문의 처음[증감식]으로 이동
    alert(m); // vscode에서 지원하는 기능: 의미없는 코드를 하얗게 표기
}
let output = 0;
for(let m = 0 ; m<=10; m++){
    if(m%2 == 1){ //m이 홀수이면
        continue; //다음 loop로 이동
    }
    //if가 아니면 짝수값을 누적
    output += m;
}

console.log(output);

/*
    확인문제
    1.
    #for in 반복문      for(const i in 배열명):가능
    0
    1
    2
    3
    #for of 반복문      for(const i of 배열명 ):가능, 둘다 증감이 되는게 아님
    사과
    배
    귤
    바나나

    2.const라서 오류가 발생한다.


    3.
    for (let i= 1; i<=100; i++){
        output *= i; 
    }
*/