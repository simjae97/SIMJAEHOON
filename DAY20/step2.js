
// 267.p
const i = 123.456789;
console.log(i.toFixed(2));

const m = Number("숫자로 변경 할 수 없는 경우");
console.log(m);                     // m : NaN
console.log(m === NaN);             // false //NaN 비교x
console.log(Number.isNaN(m));       // true

const n = 10/0;
console.log(n);
console.log(-n);

Number.isFinite(n);

// p.269
// 1. .trim():문자열 양쪽 끝에 공백 없애기

console.log("          앞과          뒤의 공백도         들어가고".trim());

// 2. .split() 소괄호가 있으면 함수,없으면 속성
const timeList = "12:30\n15:21";
console.log(timeList);

const timeArray = timeList.split("\n");
console.log(timeArray[0]);
const time = timeArray[0];
console.log(time);
const hour = time.split(":");
console.log(hour[0])

// 3. JSON: 다른 애플리케이션[js가 아닌 프로그램(지금은 브라우저)]과 통신할때 데이터 교환 목적 활용 
    // 1.js객체 -> json문자열 JSON.stringify() 
    // 2.json문자열 -> js객체  JSON.parse()
// localStorage [스크립트가 꺼지고/사라져도 사라지지 않는 메모리] //너무 개방적임
    //  -localStorage :브라우저[크롬,엣지]에 저장. 브라우저 자체가 꺼지면 사라짐 //다른탭에서도 공유
    //  -sessionstorage : 탭이 꺼지면 메모리도 꺼짐. //같은 탭에서만 공유
// localStorage.setItem(키,값);
const _object = {이름: '유재석'}
localStorage.setItem("이름",["유재석"]);
console.log(localStorage.getItem("이름"));

// ex2)
localStorage.setItem("회원정보목록",[{이름: "유재석"},{이름: "강호동"}]);
localStorage.setItem("회원정보목록2",JSON.stringify([{이름: "유재석"},{이름: "강호동"}]));