
/* 
    html에 .js파일이 포함된 구조  html이 열리면 js코드는 실행
        리턴하는이유. -> 결과를 가지고 다시 사용하기 위해서
    1.js 함수호출
        함수1();
    2.html에서 js함수 호출
        <마크업 이벤트속성="함수명(매개변수)" />
            -이벤트 속성 종류
               1. onclick
*/

// 1.매개변수 x , 리턴x
function 함수1(){console.log("함수1 실행");}
함수1();



// 2. 매개변수2, 리턴 x
function 함수2(x,y){console.log(x+y);}

//  3. 매개변수x, 리턴 o
function 함수3(){return 3+8;}
함수3();
console.log(함수3());

let result = 5+함수3();
console.log(result);


// 4.매개변수 o, 리턴 o
function 함수4(x,y){
    return x+y;
}

// 5.함수 안의 함수

function 함수5(){
    let result = 함수6(3);
    console.log(result);
}

function 함수6(x){return x**2}


/* 변수 위치에 따른 함수 내부 호출. 
    -매개변수를 이용한 서로 다른 함수간의 자료 전달 가능
    -전역변수를 사용하면 모든 함수에서 사용 가능 //특징: 프로그램이 종료 될때까지 그 자료가 사라지지않는다
    -지역변수를 쓰면 서로 다른 함수에서 사용이 불가능[매개변수 이용]//특징:메모리 효율성이 좋다

*/

const 전국지역 = 10;

function 경기도(){ 
    const 경기도=5;
    console.log(전국지역); //전역변수로 들어옴
    강원도(경기도); //외부함수를 매개변수로 이용
    console.log(강원도(경기도));

}

function 강원도(지역){
    const 강원지역 =5;
    console.log(지역);
    return 지역*5;

}
경기도();
강원도(전국지역); //매개변수로 넣음
