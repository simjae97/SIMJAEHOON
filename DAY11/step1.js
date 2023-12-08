
// 1.문자열 입력 prompt()
const input = prompt("message" ,"default");

// 실행순서
// 1. prompt("message", "default"): 클라이언트에게 입력함수 실행
// 2. return된 값이 나옴        :실행결과
// 3.const input=리턴된 값      :실행결과 저장
console.log(input);

const input2 = confirm("수락하시겠습니까");

// 2.boolean 입력 confirm
console.log(input2);

// 3.숫자 자료형으로 변환하기 Number()

console.log(Number("273"));
console.log(Number("a")); //NAN ->숫자 표기 불가능
console.log(Number(true)); //true = 1 false = 0
// 4.숫자 연산을 사용해 자료형 변환 [단 숫자+"문자열": 연결연산자]
console.log("52"-3); //49
console.log(true -1); //0
console.log(true +1); //2

// 5.문자열 자료형 변환 (String():문자열 변환 함수)
console.log(String(52.273)); // "52.273"
console.log(String(true));

console.log(53.273+"");  //"52.273"
console.log(true+"");

// 6.불 자료형으로 변환하기 Boolean()
console.log(Boolean(0));   //false
console.log(Boolean(NaN));//false
console.log(Boolean("")); //false
console.log(Boolean(null));//false
let a;
console.log(Boolean(a)); //false

// 7.논리 부정 연산자를 통해 자료형 변환하기 

console.log(!!273);    // 0 false 1>= true -> !273= false-> !!273=!false=true
console.log(!!0);

console.log(input.repeat(3));
let str = prompt("e" ,"default");
let ascii_code = str.codePointAt(0);
console.log(ascii_code);




//p.124 inch단위를 cm로 바꾸기

const rawInput = Number(prompt("인치 단위를 입력해주세요")); 
console.log(`${rawInput}inch는 ${rawInput*2.54}cm입니다.`); //연산을 통한 자료형 타입이 변환하므로 위의 Number()를 사용 안해도 되긴함


// 앞으로의 웹 개발 방향
// 함수 function 함수명(매개변수){구현할 기능}
function trans(){
    const 인치 = document.querySelector('input');
    console.log(인치.value);

    document.querySelector('.dd').innerHTML = `${ 인치.value * 2.54}cm`;
}
// 연습문제 345
let num1 = prompt("값을 입력해주세요");
let num2= num1*0.393701;
console.log(`${num1}cm는 ${num2}inch 입니다.`);

let ex4num1 = prompt("값을 입력해 주세요");
console.log(`원의 반지름: ${ex4num1}`);
console.log(`원의 넓이 ${3.14*ex4num1**2}`);
console.log(`원의 둘레: ${2*3.14*ex4num1}`);


let ex5num1 = prompt("달러 단위의 금액을 입력해주세요");
console.log(`달러 : ${ex5num1} -> 원화 : ${ex5num1*1207}`);

/* 
키오스크,엘리베이터,자율주행 자동차 
각 생활에서 사용되는 프로그램들 예시 만들기[예시6번]
    1.저장:변수/상수합쳐서 5개
    2.기능/함수           5개
    3.논리/경우의 수      5개

    ex 라면 포트,
    1.저장/변수 : 온도, 면의 종류 ,시간,온수 상태, 완료상태
    2.함수: 시작,물추가,상태변경,조리시간추가,면 종류 선택
    3.경우의 수 :용기가 있다/없다,조리시간이 완료됐다/조리중이다,상태 점검중/사용가능,온수부족/충분,온도최댓값

    시각화*/