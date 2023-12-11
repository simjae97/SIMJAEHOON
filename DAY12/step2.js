// p160.
/*
배열
    -여러 자료를 묶어서 활용할 수 있는 특수한 자료
    -문자열과 배열은 똑같이 사용됨
    

    변수: 하나의 자료를 저장하는 메모리 공간
    상수: 하나의 자료를 저장하는 메모리 공간[수정불가능]
    배열: 여러개의 자료를 묶어서 하나의 자료[]로 만들어주는 문법
        형태
            1.배열선언
                -let 변수/상수명 =[요소,요소,요소]
                -요소란? 배열내 들어간 자료(1.숫자 2.불 3.문자열 4.배열 5.함수 6.객체)
            2.배열 요소에 접근
                인덱스= 배열내 요소들이 저장된 순서번호
                0부터 시작 (length/size는 1부터 시작)
            3.배열.length = 배열 크기

            4. 배열 뒷부분에 요소 추가하기
                배열.push -->배열의 길이 리턴
                배열.splice(중간삽입할 요소의 인덱스위치,0,추가할 요소의 값)
            
            5.배열 요소 제거하기
                배열.splice(제거할 요소의 인덱스, 제거할 요소의 개수)
                    -배열.splice(0):배열 요소 전체 삭제,제거할 요소의 개수를 안 적었을경우 제거할 요소의 인덱스 뒤로 전부 삭제
                
                배열.splice(배열.indexOf(값),1)
            6.배열 내 특정 값의 위치 찾기
                배열.indexof(값);
                    -배열 내 동일한 값이 있으면 인덱스번호 반환 없으면 -1

        -[]사용
        -내부값을 ,로 구분
        -내부값을 요소[element]
    str[str.length-1] : 마지막 인덱스

    식별:데이터검색, 인덱스(순서)
*/ 

const str ="안녕하세요";
console.log(str[2]); //하
console.log(str[str.length-1]); //요

// 161.p

const array = [273, 'string' , true, function(){}, {},[673,10]];
// [273,['s','t','r','i','n','g'], true, 함수(){}, {객체},배열]
// [숫자자료형, 배열자료형,불자료형,함수,객체,배열자료형]

console.log(array); console.log(array[3]); console.log(array[5]);
console.log(array[5][0]); //673
console.log(typeof(array));

// p.162

const numbers = [273,52,103,32];
console.log(numbers[0]); //273
console.log(numbers[1]); //52
console.log(numbers[1+1]); //103
console.log(numbers[1*3]); //32

// p.163
console.log(numbers.length); //4
console.log(numbers[numbers.length-1]); //32

// p.164
const todos = ['우유 구매', '업무 메일 확인하기', '필라테스 수업'];
console.log(todos); // 배열호출
todos.push("저녁식사 준비하기");
console.log(todos); // 배열호출

todos[2] = "사과먹기"; //의미없는 인덱스에 자료 대입
console.log(todos); //배열호출

// p.166
const itemsA = ['사과','배','바나나'];
console.log(itemsA);
itemsA.splice(2,1); // 2번 인덱스부터 1개 삭제
console.log(itemsA);

// itemsA.splice(0); //삭제 개수 생략시 삭제할 인덱스 뒤로 모두 삭제
// console.log(itemsA);

// 167 값을 기반으로 요소 제거하기
const itemsB = ['사과','배','바나나'];
const index = itemsB.indexOf("배"); //배의 인덱스 1 저장
itemsB.splice(index,1);
console.log(itemsB);

// p.168

const itemsd = ['사과','배','바나나','오렌지'];
itemsd.splice(1,0,'양파'); //1번 인덱스에 삭제를 하지 않고 '양파'를 접합
console.log(itemsd); //1번인덱스 뒤로 한칸씩 밀려남
itemsd.splice(itemsd.length,0,"수박");
console.log(itemsd);

/*
마무리 문제
1:3,바나나,32
2:4,5 <length값 나옴
3:1:비파괴 2:파괴 3:비파괴 4:비파괴
*/ 
