// // 연산자 연습 문제

// -문제1 : prompt 함수 로 국어 , 영어 , 수학 점수를 입력받아 각 변수에 저장하고 총점 출력 , 평균 출력
let kor = Number(prompt("국어점수 입력"));
let eng = Number(prompt("영어점수 입력"));
let math = Number(prompt("수학점수 입력"))
console.log(`총점: ${kor+eng+math}, 평균:${(kor+eng+math)/3}`)
// -문제2 : prompt 함수 로 반지름 입력받아서 원넓이[ 반지름*반지름*3.14 ] 출력
let radius = Number(prompt("반지름입력"));
console.log(`반지름:${radius**2*3.14}`);

// -문제3 : prompt 함수 로 두 실
//수를 입력받아서 앞실수의 값이 뒤실수의 값의 몇%
//인지 출력[- 54.5   84.3 두 실수 입력시   결과 : 64%]

let number1 = Number(prompt("첫 실수 입력"));
let number2 = Number(prompt("두번째 실수 입력"));
let calc = (100*(number1/number2)).toFixed(0); // parseInt(100*(number1/number2))
console.log(`%: ${calc}`);

// -문제4 : prompt 함수 로 정수를 입력받아 홀수[true] / 짝수[false] 여부 출력
let number3 = parseInt(prompt("문제4 입력"));
console.log(`${number3%2 !=0?'홀수':'짝수'}`);
// -문제5 : prompt 함수 로 정수를 입력받아 7배수이면 true / 아니면 false 출력
let number4 = Number(prompt("문제5 정수 입력"));
console.log(`${number4%7 == 0}`)
// -문제6 : prompt 함수 로 십만원 단위의 금액을 입력받아 지폐 개수 세기[연산자 사용]
let number5 = parseInt(prompt("지폐 입력"));
if(parseInt(number5/100000)==0){
    console.log("값이 10만원 이하입니다.")
}else
{
    console.log(`5만원짜리:${parseInt(number5/50000)}, 1만원짜리:${parseInt(number5%50000/10000)}, 5천원짜리: ${parseInt(number5%10000/5000)}, 천원짜리: ${parseInt(number5%5000/1000)}`);
}
// -문제7 : prompt 함수 로 아이디와 비밀번호를 입력받아 아이디가 admin 이고 비밀번호가 1234 와 일치하면 [ 결과 : true 출력 아니면 false 출력 ]
let id = prompt("아이디 입력");
let password = prompt("비밀번호 입력");
console.log(`${id == "admin" && password=="1234"}`)
// -문제8 : prompt 함수로 정수를 입력받아 홀수 이면서 7배수이면 true 아니면 false 출력
let number6 = parseInt(prompt("문제8 정수입력"));
console.log(`${number6%7 ==0 &&  number6%2 !=0}`);

// 문제9: 정수 두개를 입력받아 더 큰 수를 출력
let a = parseInt(prompt("문제9정수 1입력"));
let b = parseInt(prompt("문제9정수 2입력"));
let max1 =a>b?a:b;
console.log(`${max1}`);
//문제10:정수 세개를 입력받아 가장 큰 수를 출력
let c = parseInt(prompt("문제10 정수3 입력"));
max1 = max1>c?max1:c;
console.log(`${max1}`);

/*
   [ JS 연산자 과제1 ]
   문제11 : 정수 3개를 입력받아 오름차순 으로 출력    [ 7 5 9 -> 5 7 9]
   문제12 : [ 가위바위보 게임 ] 
   - 가위가 '0' 이고 바위가 '1' 이고 보가 '2' 일때 플레이어1와 플레이어2 가 있습니다. 
   - 승리자 판단과 무승부 경우의수를 출력하시오.
   [입력]
      플레이어1가 0 혹은 1 혹은 2 입력받아 변수에 저장합니다.
      플레이어2가 0 혹은 1 혹은 2 입력받아 변수에 저장합니다.
   [경우의수 판단]
      플레이어1 이겼을때 경우의수 ' 플레이어1 승리 ' 출력
      플레이어2 이겼을때 경우의수 ' 플레이어2 승리 ' 출력
      비겼을경우 '무승부' 출력
*/
let min = a<b && a<c ? a : b<c ? b:c;
let mid = a<=b && b<=c ? b: c<=b && b<=a? b:b<=a&&a<=c?a:
a<=c&&c<=b?c:b<=c&&c<=a?c:a;

let max= a>b && a>c ? a: b>c ? b:c;
console.log(`[${min},${mid},${max}]`);
//자릿수 비교해서 스왑
// let temp= a> b ? b: a ; //temp값에 b와 a값중 더 작은값을 입력
// b = a> b? a:b  //a->b //b값에 a값과 b값중 더 큰값을 입력 
// a = b>temp ? temp:b; //a값에 temp값과 b값중 더 작은값을 입력
// 삼항: 선언불가능,너무길어짐
/*
    오름차순 정렬
    7 5 9
    a b c

    1.a와 b를 비교 a>b이면 자리를 바꿈
    ---모든 자릿수만큼 비교------
    a자리는 b와 c 비교
    b자리는 c와 비교
    c자리는 비교 x

    변수와 변수값을 바꿈
    1.temp라는 임의의 변수를 생성한다
    2.temp에 a를 대입한다
    3.a에 b를 대입한다
    4.b에 temp를 대입한다

    1.a= a^b
    2.b= a^b(기존의a값 출력)
    3.a= a^b(기존의b값 출력)
*/ 
let user1 = parseInt(prompt("0,1,2입력"));
let user2 = parseInt(prompt("0,1,2입력"));
let playwin ="플레이어1 승리"
let playlose ="플레이어2 승리"
let none = "무승부"
if ((user1 >2 || user1<0) || (user2 >2 || user2<0)){
    console.log("범위오류");
}else{
    console.log(`${(user2+1 == user1)||(user2-2 == user1)? 
        playwin:(user1+1 == user2)||
    (user1-2 == user2)?playlose:none}`);
    /*
    혹은 +1%3으로 계산  
    */
}