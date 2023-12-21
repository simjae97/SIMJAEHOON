/*
    객체: 속성과 메소드를 가질 수 있는 모든것
        형태
            객체 선언 : const object = {}
            객체 내 속성추가 : object.새로운속성명 = 값;
            객체 내 속성의 값 호출 = object.속성명
            객체 내 속성의 값 변경 = object.기존속성명 =값
        배열과 함수도 객체
        기본자료형(숫자,불,문자열)은 객체가 아님
            1.기본 자료형 ---> 객체로 변환 (객체자료형, 래퍼클래스)
                객체로 활용하려고 (속성/메소드를 사용하기 위해 --> 부가기능 사용)
            2.
                    new :객체를 만들때 쓰는 일반적인 new 연산자 (인스턴스화)
                new Number(숫자 자료형)
                new String(문자 자료형)
            3. 문자열 타입[일시적 승급]
                속성을 추가는 할 수 없지만 js제작자가 제공하는 속성은 사용이 가능함.
*/ 


// 257p
const a = [] // []사용했으므로 배열임

a.sample = 10;
console.log(a.sample);
console.log(typeof a);
console.log(Array.isArray(a))

function b(){}
b.sample=10;
console.log(b.sample);
console.log(typeof b) //*함수는 객체의 특성을 완벽하게 가지고 있음

const c = 273
c.sample =10;
console.log(c.sample);  //기본자료형은 속성을 추가가 불가능

const d = "hello world"
d.sample = 10;
console.log(d.sample);

const e = true;
e.sample = 10;
console.log(e.sample);

// 259.p

const f = new Number(273);
console.log(f);

f.sample = 10;

console.log(f.valueOf());

// 261.p
console.log("hello word".length);
console.log("hello word".anchor("greeting")); // 문자열 기본 자료형도 .온점 메소드 사용가능한 경우가 있다.
console.log("hello world".bold("ddd"));


Number.prototype.sample = 10;
const i = 173
console.log(i.sample); //가능

const j = 100;
console.log(j.sample);

const i2 = new Number(273);
i2.sample2 = 10;
console.log(i2.sample2);

const j2 = new Number(273);
console.log(j2.sample2);


Number.prototype.power = function(n=2){
    return this.valueOf() ** n
}

const a2 = 12
console.log(a2.power());
console.log(a2.power(3));
console.log(a2.power(4));


const h = "안녕하세요";
console.log(h.indexOf("안녕")); //문자열 내 "안녕"이 존재하면 맨 앞자리 인덱스를 출력
console.log(h.indexOf("하세"));
console.log(h.indexOf("자바"));

//  vs
String.prototype.contain = function(data){
    return this.indexOf(data) >=0; //0이상이면 True , 아니면 False
}
console.log(h.contain("안녕"));