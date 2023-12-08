// p.109~110 증감 연산자
    // 복합 대입연산자를 간략하게 사용하기 위함
    // 증감연산자는 1씩만 증감가능[프로그래밍 검사/색인/패턴은 1씩 늘어나는 경우가 많아서]
let value1 =10;
value1 = value1 +1; // 1. 변수 호출하고 연산후 결과를 변수에 대입
// vs 1과 2의 차이:없다
value1 += 1; //2.1을 간략하게 하기위해
//vs 2와 3의 차이:없다 [단 증감 연산자는 1씩증감 ]
value1++; //3. 2를 간략하게 하기위해
//vs 3와 4의 차이: 없다 [후위: 데이터를 입력후 증감,전위:증감후 데이터를 입력 -> 다음줄은 둘다 증감된 상태]
++value1;  //3. 2를 간략하게 하기위해 위의 예시는 전부 1증가

let number1 = 10; number1++; console.log(number1);
let number2 = 10; ++number2; console.log(number2);

let number3 =10; console.log(number3++); //출력후 증가
console.log(number3);                   //11
let number4 = 10; console.log(++number4);   //출력 전 증가

//차이점2:
let result1 = number4++ +10; console.log(result1); //21
console.log(result1); //21
console.log(number4); //12
