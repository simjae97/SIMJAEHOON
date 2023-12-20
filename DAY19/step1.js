/*
1.html 작성
2.css 작성

*/ 

/*
    설계
        1.경험
        2.기능 실행 순서
            [키오스크 = 사용자 입장]
            카테고리 선택 -> 제품 선택 -> 장바구니 담기 -> 결제
            [포스기 = 관리자 입장]
            결제내역 (주문상태)
            카테고리 추가/삭제 기능
            제품 추가/삭제 기능

        3.기능에 필요한 메모리(설계)
            카테고리 = [{cno: 1, cname: `신제품(NEW)`},{cno:2, cname:`프리미엄`},{cno:3 , cname:`와퍼&주니어`},{cno:4 , cname:`치킨&슈림프버거`},{cno:5, cname:`올데이킹&킹모닝`}]
                관리자가 해당 배열을 추가/삭제

        4.배열 안에 있는 데이터를 식별할때 기준점.
        
        인덱스vs식별코드생성vs이름
*/ 

/* 백엔드로부터 데이터를 받았다 치고 진행*/
//1.카테고리목록 
let categoryArray = [{cno: 1, cname: `신제품(NEW)`},
                    {cno:2, cname:`프리미엄`},
                    {cno:3 , cname:`와퍼&주니어`},
                    {cno:4 , cname:`치킨&슈림프버거`},
                    {cno:5, cname:`올데이킹&킹모닝`}]
// 2.제품목록
let productArray = [{pno:1, pname:"블랙바베큐콰트로치즈와퍼", pprice:15000 , pimg:"blackbbqcheese.png" ,cno:1},
                    {pno:2, pname:"큐브 스테이크와퍼", pprice:10000 , pimg:"cubestake.png" ,cno:5},
                    {pno:3 ,pname:"불양양 맥시멈3", pprice:12000 , pimg:"maximum3.png", cno:5}
]
let cartArray = [];
let his = [];
printCategory( 1 ); // 함수실행. // 최초 실행시 선택카테고리 cno = 1 가정
function printCategory( selectCno ){ // 함수선언. // 매개변수 : (내가 선택한 카테고리번호)함수안으로 들어온 변수.
    console.log('printCategory()함수')
    // 1. 어디에
    const categoryUl = document.querySelector('#header>ul');
    // 2. 무엇을
    let html = '';
        // 2-1 카테고리배열에 존재하는 카테고리객체들을 모두 li형식으로 변환해서
        for( let i = 0 ; i<categoryArray.length ; i++ ){
            // 만약에 i번째 카테고리의 cno와 내가선택한cno[매개변수] 와 같으면 
            // 만약에 클릭했을때. 클릭한 li의 카테고리번호를 매개변수[클릭한 cno]로 전달
            html +=`<li onclick="printCategory(${ categoryArray[i].cno })" 
                        class="${ categoryArray[i].cno == selectCno ? 'selectMenu' : '' }" > 
                        ${ categoryArray[i].cname }     
                    </li>` 
        }// f end

    // 3. 카테고리출력 
    categoryUl.innerHTML = html;
    // 4. 제품출력 
    printProduct( selectCno ); // 카테고리에서 선택된 카테고리번호를 제품출력에 매개변수로 전달
    // 왜?? 제품출력시 모든제품 출력이 아니고. 선택된 카테고리번호의 일치한 제품만 출력해야 되니까.
    
} // f end 
// - [함수2] : 제품 출력하는 함수. ( 실행조건 : 카테고리출력 되었을떄 )
function printProduct( selectCno ){ // 함수 선언 // 전체출력X // 내가 선택한 카테고리[부]의 제품[자]만.
    console.log( selectCno );
    // 1. 어디에
    const productBox = document.querySelector('#productBox');
    // 2. 무엇을
    let html ='';
        // 자식요소에서 내가 선택한 카테고리번호 와 일치한 제품을 찾아서 div화 
        for( let i = 0 ; i<productArray.length ; i++ ){
            // 만약에 i번째 제품의cno와 내가선택한cno 와 같으면.
            // 천단위쉼표 함수 : 데이터.toLocaleString()
            if( productArray[i].cno == selectCno ){
                html += `<div onclick="cartin(${productArray[i].pno})" class="product">
                            <img src="img/${ productArray[i].pimg}" />
                            <div class="pinfo">
                                <div class="pname">${ productArray[i].pname}</div>
                                <div class="pprice">${ productArray[i].pprice.toLocaleString() }원</div>
                            </div>
                        </div>`
            } // if end 
        } // f end 
    // 3. 출력 
    productBox.innerHTML = html;
} // f end 

function calc(){ //장바구니 상단 계산
    let html2 = "";
    const cartTop = document.querySelector('#cartTop');
    let calc = 0;

    for (let i=0; i<cartArray.length; i++){
        for (let j = 0; j<productArray.length; j++){
            if (productArray[j].pno == cartArray[i]){
                calc += productArray[j].pprice
            }
        }
    }
    html2 += `<div> 카트 <span>${cartArray.length}</span></div>
            <div>총 주문금액 <span>${calc}</span></div>`

    cartTop.innerHTML = html2;
}
function f5(){ //장바구니 새로고침
    let html = "";
    const productBox = document.querySelector('#cartBottom');
    for (let j = 0; j<cartArray.length; j++){
        for( let i = 0 ; i<productArray.length ; i++ ){
            if( productArray[i].pno == cartArray[j] ){
                html += `<div class="citem">
                        <div>${productArray[i].pname}</div>
                        <div>${productArray[i].pprice.toLocaleString()}</div>
                        <span onclick="del(${j})">X</span>
                        </div>`
            }
        }      
    }
    productBox.innerHTML = html;
    calc();
}


function cartin(a){ //장바구니 넣기
    cartArray.push(a)
    console.log(cartArray);
    f5();
}

function del(i){ //장바구니 단일삭제
    if(confirm("삭제하시겠습니까?")){
        cartArray.splice(i,1);
        f5();
    }   
}

function unorder(){ //큰취소 버튼
    if(confirm("전체취소하시겠습니까?")){
        reset();
    }
}

function reset(){ //장바구니 초기화
    cartArray.splice(0);
    f5();
}

function order(){ //주문버튼
    if(confirm("구매하시겠습니까?")){
        let a= new Date();
        let year = String(a.getFullYear()); // 년도
        let month = String(a.getMonth() + 1);  // 월
        let date = String(a.getDate());  // 날짜
        let b = year+month+date;
        console.log(cartArray);
        let calc = 0;
        let mainMenu ="";
        for (let i = 0; i<productArray.length; i++){
            if (productArray[i].pno == cartArray[0]){
                mainMenu=productArray[i].pname;
            }
            for (let j = 0; j<productArray.length; j++){
                if (productArray[j].pno == cartArray[i]){
                    calc += productArray[j].pprice
                }
            }
        }
        his.push({mainMenu :mainMenu,date:b, len: cartArray.length-1,value:calc,state:"주문완료"});
        history();
        console.log(his)
        reset();
    }
} 

function history(){ //주문내역 테이블에 적어두기
    let html="";
    const aaa = document.querySelector('#history');
    let calc = 0;
    for (let i =0; i<his.length; i++){
        html +=`<tr><td>${i+1}</td><td>${his[i].date}일</td><td>${his[i].mainMenu}외 ${his[i].len}건</td><td>${his[i].value.toLocaleString()}원</td><td>${his[i].state}</td><td><input onclick="refund(${i})" type="button" value="환불"></td></tr>`
        if(his[i].state=="주문완료"){
            calc += his[i].value;
        }
    }
    html += `<div>총합:${calc.toLocaleString()}원</div>`
    aaa.innerHTML = html;
}

function refund(i){
    if(his[i].state=="주문완료"){
        his[i].state= "환불";   
        console.log(his[i]);
        history();
    }
    else{
        alert("이미 환불처리된 내역입니다.");
    }
}


function cupload(){
    const cano = document.querySelector("#cano").value;
    const caname = document.querySelector("#caname").value;
    if(cano==""||caname==""){
        alert("공백은 입력할 수 없습니다");
        return;
    }
    if (isNaN(cano)){
        alert("숫자를 넣어주세요")
        return;
    }
    for (let i = 0; i<categoryArray.length; i++){
        if (categoryArray[i].cno == cano){
            alert("이미 있는 번호입니다");
            return;
        }
        if (categoryArray[i].cname == caname){
            alert("이미 있는 이름입니다");
            return;
        }
    }
    categoryArray.push({cno: Number(cano), cname: caname});
    printCategory( 1 );
    minput()
}


function pupload(){
    const pno = document.querySelector("#pno").value;
    const pname = document.querySelector("#pname").value;
    const price = document.querySelector("#price").value;
    const cano = document.querySelector("#cano1").value;

    if(pno==""||pname==""||price==""){
        alert("공백은 입력할 수 없습니다");
        return;
    }
    if (isNaN(pno) || isNaN(price)){
        alert("숫자를 넣어주세요")
        return;
    }
    for (let i = 0; i<productArray.length; i++){
        if (productArray[i].pno == pno){
            alert("이미 있는 번호입니다");
            return; 
        }
        if (productArray[i].pname == pname){
            alert("이미 있는 제품명입니다");
            return; 
        }
    }
    productArray.push({pno:Number(pno), pname:pname, pprice:Number(price) , pimg:"blackbbqcheese.png" ,cno:cano});
    printCategory( 1 );
}

function minput(){ 

    const minput = document.querySelector('#minput');
    let html = '';
    html += `<input type="text" id="pno" placeholder="번호"/>
            <input type="text" id="pname" placeholder="이름"/>
            <input type="text" id="price" placeholder="가격"/>
            <select id="cano1">`
    for ( let i =0; i<categoryArray.length; i++){
        html += `<option value="${categoryArray[i].cno}">${categoryArray[i].cname}</option>`
    }

    html += `</select>
    <input type="button" onclick="pupload()" value="확인">`;

    minput.innerHTML = html;
}

minput()