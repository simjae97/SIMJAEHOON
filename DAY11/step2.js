/*
    p.131 if 조건문
        조건에 따라서 코드를 실행하거나 실행하지 않을때 사용하는 구문 

    
    형태

    1.if(T/F){참일경우 실행되는 코드}
    2.if(T/F){참일때 실행코드}
    else{거짓일때 실행코드}
    3.if(T/f){
        if(T/F){

        }
        else{}
    }
    else{
        if(tf){}
        else{}
    }
    4.다수조건
    if(조건1)
    {

    }
    else if(조건2)
    {

    }
    else if(조건3)
    {

    }
    else <--나머지
*/

if (273 < 100){
    console.log("hello world!"); //조건문이 False이므로 실행 x
}else{
    console.log("ss");
}

// 2.

const date =new Date();
console.log(date);
const hour = date.getHours(); // 시를 반환하는 함수
console.log(hour);

// 1.만약에 현재 시간이 12보다 작으면 오전
if( hour < 12){ console.log("오전입니다");}
if(hour >= 12){ console.log("오후입니다");}

if(hour < 12){
    console.log("오전");
}else{
    console.log("오후");
}

if( hour <11){
    console.log("아침 먹을 시간입니다");
}
else{
    if(hour<15){
        console.log("점심 먹을 시간입니다");
    }
    else{
        console.log("저녁먹을 시간입니다.");
    } //두번째 if끝
} //첫번째 if끝

if (hour < 11){
    console.log("아침 먹을 시간입니다");
}
else if(hour < 15){
    console.log("점심 먹을 시간입니다");
}
else{
    console.log("저녁 먹을 시간입니다");
}

const a = Number(prompt("숫자를 입력 해 주세요."))

if( a>0){
    console.log("숫자는 양수입니다");
}
else if(a == 0){
    console.log("숫자는 0 입니다");
}
else{
    console.log("숫자는 음수입니다");
}

const a1 = Number(prompt("숫자를 입력해 주세요."));

if (a1 % 1 == 0){
    if (a%2 == 0){
        console.log("a는 짝수입니다");
    }
    else{
        console.log("a는 홀수입니다");
    }
}
else{
    console.log("정수가 아닙니다");
}

if (a >=3 && a<=5){
    console.log("봄입니다");
}
else if(a>=6 && a<=8){
    console.log("여름입니다");
}
else if(a>=9 && a<=11){
    console.log("가을입니다");
}
else if(a==12 || a<=2 ){
    console.log("겨울입니다.");
}
else{
    console.log("값이 잘못 입력되었습니다.");
}

// 엘레베이터 if문 수도코드

/*
1.무게
if(현재무게<설정무게){
    정상운행합니다
}
else{
    신호가 울린다
}
2.카드찍기
if(카드가 신호에 찍혔나){
    버튼이 동작한다
}
else{
    버튼이 동작하지않는다
}

3.
if(이동중일떄){
    화살표가 전광판에 표시된다
}
else{
    화살표가 전광판에서 꺼진다
}

4.
if(현재층==누른버튼){
    움직이지않는다
}
else{
    층을 이동한다
}
5.
if(점검중 == true){
    운행이 멈춘다
}
else{
    정상 운행된다
}
6.외부의 버튼이 눌렸을 때
변수:외부 입력버튼 (1(위로가는버튼)or-1(아래로가는버튼)),현재 엘레베이터 진행방향(1(위)or-1(아래))
if(버튼이 눌린층== 현재눌린층)
{
    if(외부진헹버튼 == 현재 엘레베이터 진행방향){
        멈추고 문이 열린다
    }
    else{
        무시하고 진행한다
    }
}
7.내부 버튼의 우선순위(2개만)
if((두번째 목표층- 현재층)*진행방향 >0){ //현재 진행방향과 두번째 목표층의 방향이 같으면
    if(두번째 목표층 - 현재층) <= (첫번째 목표층 - 현재층){ //첫번째 목표층이 두번째 목표층 보다 높으면
        두번째 목표층을 먼저 진행한다
    }  
    else{
        첫번째 목표층을 먼저 진행한다
    }
}   
else{
    첫번째 목표층을 먼저 진행한다
}



*/ 