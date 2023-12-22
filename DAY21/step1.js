// p.276: Math 객체

//  0~ 1미만의 난수
const num = Math.random();
console.log(num);

// 0~10미만의 난수
console.log(num*10);

console.log(num*50);

// 1~51
console.log(num*50 + 1);


// -5~5

console.log(num*10-5);

console.log(num*50-25);


console.log(Math.floor(3.14)); //소수점 버림
console.log(parseInt(3.14));

console.log(1.1+0.1)

// p.291:객체 속성 여부 확인
const object={
    name : '혼자 공부하는 파이썬',
    price : 15000,
    publisher: '한빛 미디어'

}

if (object.name !== undefined){ console.log("name 속성 존재");}
else{ console.log("name")}

if( object.author !== undefined ){ console.log('author 속성 존재');}
else{ console.log('author 속성 없음'); }