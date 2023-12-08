/*
    p.102:상수와 변수
    상수: 항상 같은 수
        -한번 값을 넣으면 수정 할 수 없습니다.
    변수: 변할 수 있는 수
        -값을 변경 할 수 있습니다.

*/
/*1.상수만들기
    1.const     키워드 작성 상수인지 변수인지 식별
    2.상수명    이름  상수의 구별
    3.=         대입연산자  값을 대입하기 위해서
    4.자료      저장할 값
*/ 
const pi = 3.141592; //random access memory에 저장
//2.상수를 호출하는 방법[상수 이름 작성] 
console.log(pi);

// 3. 상수의 값을 변경하는 방법 [호출해서 다시 대입] 키워드 x <- 상수는 값을 바꿀수 없으니 오류 남


// pi = 4;


const r = 10;

// 4.산수의 연산

console.log(2*pi*r); //상수의 값을 우선 호출한 뒤에 연산을 실행

//5.동일한 상수명 사용 특정 범위내 중복이 불가능

// const pi= 3.00;

// 6.상수의 값을 대입 안 했을때 (상수 만들때(초기에) 값을 넣는 과정 =초기화가 없으면 오류 발생)

// const pi; 
/* 변수만들기
    1.let
    2.변수명
    3.=
    4.값
*/ 
// 2.변수호출
let pi3 = 3.141592;
console.log(pi3);
console.log("pi3: "+pi3);
console.log(`pi3:${pi3}`);

// 3.변수의 값 변경 [값 변경시에도 변수 호출후 다시 대입]

pi3= 3.15;
console.log(pi3);

//4. 변수의 연산
let r3= 10;

console.log(2*pi3*r3);

// p.107 var와 let키워드의 차이
let value1 = 10;
//let value1 = 10; 중복 불가능 초기화 한번만 가능 
var value2 = 10;

var value2 = 10; //중복 가능 초기화 여러번 가능 [동일한 변수명으로 선언시 덮어씌우기가 가능]

// p.108 복합 대입 연산자

value1 += 10;
//  둘이 같음
value1 = value1+10; //문장
    // =기준으로 오른쪽 연산
        // value +10 중에서 변수 호출이 우선
    //1. value1 10호출
    //2. 10+10 연산
    //3. 20 결과
    //4. = 연산후 대입
    //5. value1 = 20 변수 값 변경
console.log(value1);

// js에서 html(문자열 자료형)을 작성할때 주로 사용

let list =``; //list 변수에 빈문자열을 넣은 상태로 선언

list += `<ul>`;
list += `<li>hello</li>`;
list += `<li>javascript</li>`;
list += `</ul>`;

document.write(list);

// 예제1 : 2개의 숫자를 입력받아 더한 값을 html <h3>로 출력
// 1.prompt("출력하고 싶은 말"):input을 제공하는 함수
// input:입력된 결과를 반환
let number1 = Number(prompt("예제1 첫번쨰값 입력")); //prompt로 입력 > number로 변환 > =로 입력
let number2 = Number(prompt("예제1 두번째 값 입력 "));

document.write(`예제 1결과 <h3>${number1+number2}</h3><br/>`);
//예제2 : 2개의 숫자를 입력받아 더 큰 수를 <h3>으로 출력

let number3 = Number(prompt("예제2 세번쨰값 입력"));
let number4 = Number(prompt("예제2 네번쨰값 입력"));

document.write(`예제 2결과 <h3>${number3>number4 ? number3:number4}</h3>`);

if(number3 > number4)
{
    document.write(`예제 2결과 <h3>${number3}</h3>`);
}else
{
    document.write(`예제 2결과<h3>${number4}</h3>`);
}

// 단항[피연산자1개] 이항[피연산자2개] 삼항[피연산자3개]
// 삼항 연산자 : 조건? true:false
// 조건에 따른 서로 다른 실행결과를 만들기
// true와 false를 다르게 표현

console.log(number3>number4);
console.log(number3>number4?"true":false);














