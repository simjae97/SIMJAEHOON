/*  
    p.142 switch 조건문
        -경우의 수가 값으로 정해져 있을 경우 많이 사용,논리(범위)판단할때는 사용하지않음
        break:탈출문
        1형태
            switch(자료){
                case 조건a: 실행코드; break;
                case 조건b: 실행코드; break;
                case 조건c: 실행코드; break;
                default: 실행코드; break;
            }

    p.145 삼항연산자
            -간단한 결과(조건 1개 또는 2개) 조건에 따른 결과 실행
            -조건부 랜더링[화면표현](js많이 씀) 

            1.형태:
                불 표현식? 참결과:거짓결과

*/ 

const input = Number(prompt("숫자를 입력하세요")); // 숫자를 입력받아 숫자 자료형 변환후 상수에 저장

// if문
if(input%2==0){
    console.log("if짝수입니다");
}
else if (input%2==1){
    console.log("if홀수입니다");
}
else{
    console.log("if정수가 아닙니다")
}
// switch문
switch(input%2){
    case 0:
        console.log("case짝수입니다");
        break;
    case 1:
        console.log("case홀수입니다");
        break;
    default:
        console.log("case정수가 아닙니다");
        break;
}

const date = new Date();
const hour = date.getHours();

// if문
if(hour < 11){ console.log("아침먹을 시간입니다");}
else if (hour< 15){console.log("점심먹을시간입니다");}
else{console.log("저녁먹을시간입니다");}
// swtich문
switch (true){
    case hour < 11:
        console.log("아침먹을시간입니다");
        break;
    case hour < 15:
        console.log("점심먹을 시간입니다");
        break;
    default:
        console.log("저녁먹을시간입니다");
        break;
}

const input1 = Number(prompt("숫자를 입력해 주세요"));
// if
if(input >=0){console.log("0이상입니다");}
else{console.log("0미만입니다");}
const result = input1 >= 0 ? "0이상입니다":"0미만입니다";
console.log(result);


// 148p. 홀수 짝수 구하기
    /* 홀짝 계산식: 수 % 2 == 0 or 1
    문자인경우:Number(문자열[문자열.length-1])%2
    */

/* 150.p
 */

const score = Number(prompt("학점을 입력해주세요","학점"));
if(score >= 4.5){
    console.log("신");
}
else if(score >= 4.2 && score <4.5 ){
    console.log("교수님의 사랑");
}
else if (score >=3.5 && score <4.2){
    console.log("현 체제의 수호자");
}
else if( score>=2.8 && score < 3.5){
    console.log("일반인");
}
else if(score>=2.3 && score <2.8){
    console.log("일탈을 꿈꾸는 소시민");
}
else if(score>=1.75 && score <2.3){
    console.log("오락문화의 선구자");
}
else if(score>=1 && score <1.75){
    console.log("불가촉천민");
}
else if(score>=0.5 && score <1){
    console.log("자벌레");
}
else if(score>0 && score <0.5){
    console.log("플랑크톤");
}
else{
    console.log("시대를 앞서가는 혁명의 씨앗")
}

if(score >= 4.5){
    console.log("신");
}
else if(score >= 4.2 ){
    console.log("교수님의 사랑");
}
else if (score >=3.5){
    console.log("현 체제의 수호자");
}
else if( score>=2.8){
    console.log("일반인");
}
else if(score>=2.3){
    console.log("일탈을 꿈꾸는 소시민");
}
else if(score>=1.75){
    console.log("오락문화의 선구자");
}
else if(score>=1){
    console.log("불가촉천민");
}
else if(score>=0.5){
    console.log("자벌레");
}
else if(score>0){
    console.log("플랑크톤");
}
else{
    console.log("시대를 앞서가는 혁명의 씨앗")
}

// 153.p 
// 문자열.split("기준문자"):문자열 내 특정문자 기준으로 문자열 분리 함수 / 반환 : 배열
// '유재석,강호동,신동엽'.split(",") : 3조각
// 여러 자료를 모아두는 곳 == 배열

const rawInput = prompt("태어난 해를 입력해 주세요");
const year = Number(rawInput);

const tti = "원숭이,닭,개,돼지,쥐,소,호랑이,토끼,용,뱀,말,양".split(",");
console.log(`${year}년에 태어났다면 ${tti[year%12]}띠 입니다`);
const tti2= "경,신,임,계,갑,을,병,정".split(",");
const tti1 ="신,유,술,해,자,축,인,묘,진,사,오,미".split(",");
/*
    확인문제
    1.confirm문실행
    2.집에서
    3.집에서
    4.4
    5.3
    짧은 조건문 || 논리합일때 좌변이 참이면 우변을 실행하지않는다.
                && 논리곱일때 좌변이 거짓이면 우변을 실행하지않는다
*/
// 2
let result1;

switch(year%12){
    case 0:
        result1 = tti[0];
        break;
    case 1:
        result1 = tti[1];
        break;
    case 2:
        result1 = tti[2];
        break;
    case 3:
        result1 = tti[3];
        break;
    case 4:
        result1 = tti[4];
        break;    
    case 5:
        result1 = tti[5];
        break;
    case 6:
        result1 = tti[6];
        break;
    case 7:
        result1 = tti[7];
        break;
    case 8:
        result1 = tti[8];
        break;
    case 9:
        result1 = tti[9];
        break;
    case 10:
        result1 = tti[10];
        break;
    case 11:
        result1 = tti[11];
        break;
}
// 3번
console.log(`${year}년에 태어났다면 ${result1}띠입니다.`);

console.log(`${year}년은 ${tti2[year%10]}${tti1[year%12]}년 입니다.`)