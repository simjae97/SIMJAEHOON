/*
        p.174 반복문
            -반복작업
            -형태
            for (let i = 0; <<==let으로 선언해야함 i< 반복회수; i++){
                문장
            }
            for (1.초기값; 2.조건문; 4.증감식){3.실행코드}

            1.let i = 0 : 반복을 시작할 때 처음값 [초기값]
                i 를 0부터 시작
            2. i< 반복횟수:반복을 할 수 있는 조건[조건을 충족시 반복 실행문]
                i는 반복횟수보다 작으면 실행
            3.문장      :반복시 실행되는 구역
            4.i++       :1회 반복후 실행되는 증감연산식

            실행순서
                1.[초기값]변수에 초기화
                2.[조건문]for문에 들어갈 조건을 만족하는지 검사,false시 for문 탈출
                3.[실행코드]반복되는 내용을 실행1회
                4.[증감식]변수 값 증감
                ->2로 돌아감
                초기값은 한번만 실행됨

*/

for (let i = 0; i<10; i++)
{
    console.log("우유구매"+i);
}

// let output = 0;
// // p.178

// for (let i = 1; i<=100; i++){
//     output += i;
//     console.log(i+"회"+output+"아웃풋");
// }

// console.log(`1~100까지 숫자를 모두 더하면 ${output}입니다`);

// p.180 예제3 for문과 배열(인덱스:0부터 ~1씩증가 패턴, 배열내 인덱스 순회/확인)의 관계
// 0부터 마지막 인덱스(<=배열.length-1 or <배열.length)

const todos = ["우유 구매",'업무 메일 확인하기','필라테스 수업'];

for ( let i = 0; i< todos.length; i++){
    console.log(`${i+1}번째 할 일: ${todos[i]}`);
}

for ( let i = todos.length-1; i >= 0; i--){
    console.log(`${i+1}번째 할 일: ${todos[i]}`);
}

let outPrint=""; //공백이 저장된 변수
//예제 1부터 10까지 1씩 증가반복[한줄표기];

for (let i = 0; i< 10; i++){
    outPrint += `${i} `;
}
console.log(outPrint);

// 예2) 1부터 10이하까지 1씩 증가 반복 [ul 표시]

outPrint = ""; //변수 초기화 
for ( let i = 0; i<10; i++){
    outPrint += `<li>${i} </li>`;
}
document.querySelector("ul").innerHTML = outPrint;


//  예3) 1부터 10 이하까지 1씩 증가 반복[누적 합계]
let sum = 0; // 반복 전에는 누적 합이 0

for (let i = 1; i<=10; i++){
    sum += i;
}

console.log(sum);
/*
    예4 반복문 순서도. 모든 코드 과정 순서 작성.
        초기값:  i= 1  조건문    ,         실행문       sum = 0 
        loop1: i = 1  1<=10(true)     ,   0+1 = 1     sum = 1      i++
        loop2: i = 2  2<=10(true)     ,   1+2 = 3     sum = 3      i++
        loop3: i = 3 3<=10(true)          3+3 = 6     sum = 6      i++
        loop4: i = 4 4<=10(true)          6+4 = 10    sum = 10     i++
        loop5: i = 5 5<=10(true)          10+5 =15    sum = 15     i++
        loop6: i= 6 6<=10(true)           15+6= 21    sum = 21     i++
        loop7: i=7 7<=10(true)            21+7=28     sum= 28      i++
        loop8: i=8  8<=10(true)           28+8=36     sum=36       i++
        loop9: i=9  9<=10(true)           36+9=45     sum=45       i++
        loop10:i=10 10<=10(true)          45+10=55    sum=55       i++
        loop11:i=11 11<=11(false)         loop 탈출   sum= 55
*/ 

//예5) 1부터 100까지 7배수 누적 합계
let sum1= 0;
for (let i = 7; i<=100; i+=7){
    sum1 += i;
}
console.log(sum1);

sum1 = 0;
for (let i = 0; i<=100; i++){
    if (i%7 == 0)
    {
        sum1 += i;
    }
}

console.log(`sum1= ${sum1}`);

// for문 중첩

for (let 부모 =1; 부모<=5;부모++){ //5회
    for (let 자식= 1; 자식<=3; 자식++){ //3회 5*3해서 총 15회 
        console.log(`${부모}의 자식 : ${자식}`);
    } //for2 end
}   // for1 end


// 예6) 구구단
// 1.2단
for(let i=1; i<=9; i++){
    console.log(`2 * ${i} = ${2*i}`);
}
// 2~9단
for(let i =2; i<=9; i++){
    for(let j=1; j<=9; j++){
        console.log(`${i} * ${j} = ${j*i}`);
    }
}