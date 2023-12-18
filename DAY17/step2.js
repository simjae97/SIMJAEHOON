/* 
js자료형
    1.숫자          1   2   3   4   5   6
    2.문자         "" '' ``
    3.불            true false
    4.undefined     자료데이터 없음, undefined != " " != 0 
    5. 배열         [자료,자료,자료]
                    -[숫자, 문자열, 불, 배열]
                    -[숫자,문자열,불,배열,변수,상수,함수,객체()]
    6.함수          function(){}
                    1.const/let 변수명 = function(){} 익명함수
                    2.function 함수명(){} 선언적 함수
    ****7.객체(object){ key:value , key:value, key:value}
                -1.{
                    keyname1:1,
                    keyname2:"문자열",
                    keyname3:true;
                    keyname4:[],
                    keyname5:{},
                    keyname6: function(){}
                }
             
             
            
*/ 
// p.246
console.log({});
const product = {
    제품명: '7D 건조 망고' , //key = '제품명',value '건조 망고' => 속성(property)
    유형: '당절임',
    성분: '망고,설탕,매타중아황산나트륨,치자황색소',
    원산지:'필리핀'
}

// 2.객체 호출

console.log(product);
console.log(product['제품명']);
console.log(product['유형']);
console.log(product['성분']);
console.log(product['원산지']);

console.log(product.제품명);
console.log(product.유형);
console.log(product.성분);
console.log(product.원산지);

// p.248

const 객체2 ={
    number : 273, string: "구름",boole : true,
    array : [52,283,103,32],
    method : function(){console.log("dd")},
    객체3: {method2 : function(){console.log("bb")}}
}

console.log(객체2);
// document.querySelcetor();  // document:객채 내 querySelector 속성에 함수 호출
// .(온점) : 접근연산자: 객체 내 속성에 접근
객체2.method(); //객체2내 속성(메소드) 호출
객체2.객체3.method2(); //객체2내 속성(객체3내 속성(메소드2)호출) 호출

// p.249

const pet = {
    name : `구름`,
    eat : function(food){
        alert(`${this.name}은 ${food}를 먹습니다`)
    },
    eat2(food){ //함수명이 속성명을 대신하여 사용가능
    }
}

pet.eat('라면');

// p.249~250
const student = {};
student.이름= '윤인성';
student.취미 = "악기";
student.장래희망="생명공학자";
delete student.장래희망;

console.log(student);

// 마무리 문제

const book ={
    name : "혼자 공부하는 파이썬",
    price : 18000,
    publisher : "한빛 미디어"
}

console.log(book);

// 2.3
// 3.1
// 4.print부분 빵는 스페인어로 pan입니다