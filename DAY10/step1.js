console.log("hello world!");
console.log(5+3*2);
console.log((5+3)*2);
console.log(5-3);
console.log(10%2); //0
console.log(10%3); //1
console.log(10%4); //2

console.log(10/2); // 5
console.log(10/3); //3.3333

// parseInt():정수
console.log(parseInt(10/3));

console.log(2**(3<4));
console.log(57>273);
console.log(52<2743);
console.log(10===10);
console.log(10==="10");
console.log("가방">"하마"); //false
console.log("하마">"가방"); //true, 오름차순
console.log(52>= 2734);
console.log(52 <= 273);
console.log(10 != 11);

console.log(!true);
console.log(!false); //부정연산자

console.log(true&&true); 
console.log(false&&true); 
console.log(true&&false);   
console.log(false&&false);  

console.log(true||true);    
console.log(true||false);   
console.log(false||true);   
console.log(false||false);  

console.log(true^true);     
console.log(true^false);
console.log(false^true);
console.log(false^false);

// 자료형 검사(현재 자료가 숫자인가? 문자인가? 불인가? 확인작업)
// 유효성검사 -> 자료형에 따른 로직 대입

console.log(typeof("dd")); //문자
console.log(typeof(1));
console.log(typeof(false));
console.log(typeof"gd");
console.log(typeof (50-30)); //단항 <- 괄호 안 써도 됨

var i = 0;
if(i++ == 0 || i-- == 0){
    console.log(i); 
}
i=0;

if(i++ == 1 && i-- == 0){
    console.log("dd");
}else{
    console.log(i);
}


console.log( i ? 10: 20); //i가 참이면 10,아니면 20

console.log( i== 2 ? 10:20);

// p.98 템플릿 문자열

console.log("표현식 273+52의 값은"+(273+52)+"입니다");

console.log(`표현식 273+52의 값은${273+52}입니다`);

// p.99

console.log(1 == "1"); //데이터만 비교
console.log(false == 0); //false는 0과 같다 true는 1 
console.log("" == []); //빈문자열과 빈 배열은 같다
console.log(null == []);

/* 
    p.100 마무리 확인문제
    boolean
    number
    number
    boolean

*/